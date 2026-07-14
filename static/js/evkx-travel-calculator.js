const calculators = document.querySelectorAll('[data-ehga-range-calculator]');

const labels = {
  en: {
    loading: 'Calculating…',
    ready: 'Updated with the selected conditions.',
    error: 'The calculator could not retrieve a result.',
    button: 'Calculate range',
    calculating: 'Calculating…',
    parts: {
      aeroWhPerKm: 'Air resistance',
      rollingWhPerKm: 'Drivetrain and rolling resistance',
      hvacWhPerKm: 'Climate',
      auxWhPerKm: 'Auxiliary systems',
      trailerWhPerKm: 'Trailer',
    },
  },
  nb: {
    loading: 'Beregner…',
    ready: 'Oppdatert med valgte forhold.',
    error: 'Kalkulatoren kunne ikke hente et resultat.',
    button: 'Beregn rekkevidde',
    calculating: 'Beregner…',
    parts: {
      aeroWhPerKm: 'Luftmotstand',
      rollingWhPerKm: 'Drivverk og rullemotstand',
      hvacWhPerKm: 'Klima',
      auxWhPerKm: 'Hjelpesystemer',
      trailerWhPerKm: 'Tilhenger',
    },
  },
};

const number = (value, digits = 0) => new Intl.NumberFormat(undefined, {
  maximumFractionDigits: digits,
  minimumFractionDigits: digits,
}).format(value);

function duration(value) {
  if (!value) return '—';
  const match = String(value).match(/(?:(\d+)\.)?(\d{1,2}):(\d{2})/);
  if (!match) return String(value);
  const days = Number(match[1] || 0);
  const hours = Number(match[2]) + days * 24;
  const minutes = Number(match[3]);
  return `${hours} h ${minutes.toString().padStart(2, '0')} min`;
}

function setLoading(host, loading, copy) {
  const result = host.querySelector('[data-calculator-result]');
  const button = host.querySelector('[data-calculator-submit]');
  const status = host.querySelector('[data-calculator-status]');
  result.setAttribute('aria-busy', String(loading));
  button.disabled = loading;
  button.textContent = loading ? copy.calculating : copy.button;
  status.textContent = loading ? copy.loading : copy.ready;
  host.classList.toggle('is-loading', loading);
}

function updateOutput(form, name, value) {
  const output = form.querySelector(`[data-value="${name}"]`);
  if (!output) return;
  if (name === 'speed') output.textContent = `${value} km/h`;
  if (name === 'temperature') output.textContent = `${value} °C`;
  if (name === 'hvac') output.textContent = `${Number(value).toFixed(1)} kW`;
  if (name === 'soh') output.textContent = `${value}%`;
}

function renderBreakdown(host, trip, copy) {
  const wrapper = host.querySelector('[data-consumption-breakdown]');
  const rows = host.querySelector('[data-breakdown-rows]');
  const keys = ['aeroWhPerKm', 'rollingWhPerKm', 'hvacWhPerKm', 'auxWhPerKm', 'trailerWhPerKm'];
  const parts = keys
    .map((key) => ({ key, value: Number(trip[key] || 0) }))
    .filter((part) => part.value > 0);
  const maximum = Math.max(...parts.map((part) => part.value), 1);

  rows.replaceChildren();
  parts.forEach((part) => {
    const row = document.createElement('div');
    row.className = 'range-calculator__breakdown-row';

    const heading = document.createElement('div');
    const name = document.createElement('span');
    const value = document.createElement('strong');
    name.textContent = copy.parts[part.key];
    value.textContent = `${number(part.value, 0)} Wh/km`;
    heading.append(name, value);

    const track = document.createElement('div');
    track.className = 'range-calculator__breakdown-track';
    const fill = document.createElement('i');
    fill.style.width = `${Math.max(3, (part.value / maximum) * 100)}%`;
    track.append(fill);
    row.append(heading, track);
    rows.append(row);
  });
  wrapper.hidden = parts.length === 0;
}

function renderResult(host, trip, copy) {
  let modelName = trip.model || host.dataset.modelTitle || '';
  if (host.dataset.modelTitle?.startsWith('AUDI ')) {
    modelName = modelName.replace(/^Audi\s+/i, 'AUDI ').replace(/\be5\b/i, 'E5').replace(/\be7x\b/i, 'E7X');
  }
  host.querySelector('[data-result-range]').textContent = number(Number(trip.totalDistance || 0));
  host.querySelector('[data-result-consumption]').textContent = `${number(Number(trip.whKm || 0), 0)} Wh/km`;
  host.querySelector('[data-result-energy]').textContent = `${number(Number(trip.totalConsumption || 0), 1)} kWh`;
  host.querySelector('[data-result-time]').textContent = duration(trip.totalTime);
  host.querySelector('[data-result-vehicle]').textContent = modelName;
  renderBreakdown(host, trip, copy);
}

calculators.forEach((host) => {
  const form = host.querySelector('[data-calculator-form]');
  const lang = host.dataset.lang === 'nb' ? 'nb' : 'en';
  const copy = labels[lang];
  const error = host.querySelector('[data-calculator-error]');
  const trailerControl = host.querySelector('[data-trailer-control]');
  let requestController;
  let requestNumber = 0;

  form.querySelectorAll('input[type="range"]').forEach((input) => {
    updateOutput(form, input.name, input.value);
    input.addEventListener('input', () => updateOutput(form, input.name, input.value));
  });

  form.elements.isTowing.addEventListener('change', () => {
    trailerControl.hidden = !form.elements.isTowing.checked;
  });

  async function calculate() {
    const currentRequest = ++requestNumber;
    requestController?.abort();
    const controller = new AbortController();
    requestController = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    error.hidden = true;
    setLoading(host, true, copy);

    const data = new FormData(form);
    const payload = {
      eVs: [host.dataset.evId],
      mode: 'Range',
      rangeMode: data.get('rangeMode'),
      travelSpeed: Number(data.get('speed')),
      temperature: Number(data.get('temperature')),
      drivingCondition: data.get('condition'),
      hvacUsage: Number(data.get('hvac')),
      soh: Number(data.get('soh')),
      heatLossFactor: 0,
      useImperialUnits: false,
      trimLevel: data.get('trimLevel'),
      ...(data.get('isTowing') ? { trailerKey: data.get('trailerKey') } : {}),
    };

    try {
      const response = await fetch(host.dataset.apiUrl, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`EVKX calculator returned ${response.status}`);
      const result = await response.json();
      const trip = result.calculatedTrips?.[0];
      if (!trip) throw new Error('EVKX calculator returned no trip');
      renderResult(host, trip, copy);
      setLoading(host, false, copy);
    } catch (reason) {
      if (currentRequest !== requestNumber) return;
      console.error('Unable to calculate range with EVKX', reason);
      setLoading(host, false, copy);
      host.querySelector('[data-calculator-status]').textContent = copy.error;
      error.hidden = false;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    calculate();
  });

  calculate();
});
