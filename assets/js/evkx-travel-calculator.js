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

function formatModelName(host, value) {
  let modelName = value || host.dataset.modelTitle || '';
  if (host.dataset.modelTitle?.startsWith('AUDI ')) {
    modelName = modelName.replace(/^Audi\s+/i, 'AUDI ').replace(/\be5\b/i, 'E5').replace(/\be7x\b/i, 'E7X');
  }
  return modelName;
}

function belongsToModelFamily(family, value) {
  const name = String(value || '').toLowerCase();
  const patterns = {
    'q4-e-tron': /^audi q4\b/,
    'q5-e-tron': /^audi q5\b/,
    'q6-e-tron': /^audi (?:q6l?|sq6)\b/,
    'q8-e-tron': /^audi (?:q8|sq8)\b/,
    'e-tron-gt': /e-tron gt/,
    'a6-e-tron': /^audi (?:a6|s6)\b/,
    'e-tron': /^audi e-tron(?:\s|$)/,
    'e5': /^audi e5\b/,
    'e7x': /^audi e7x\b/,
  };
  return patterns[family]?.test(name) ?? true;
}

function isCalculableVariant(variant) {
  return !Array.isArray(variant.battery)
    || variant.battery.length === 0
    || variant.battery.some((battery) => Number(battery.netCapacity) > 0);
}

function variantLabel(host, variant) {
  const battery = variant.battery?.[0]?.grossCapacity;
  const years = Array.isArray(variant.modelYear)
    ? variant.modelYear.map((year) => /^\d{4}$/.test(String(year)) ? `MY${year}` : String(year).toUpperCase()).join(', ')
    : '';
  return [
    formatModelName(host, variant.name),
    Number.isFinite(Number(battery)) && Number(battery) > 0 ? `${number(Number(battery), Number.isInteger(Number(battery)) ? 0 : 1)} kWh` : '',
    years,
    isCalculableVariant(variant) ? '' : (host.dataset.lang === 'nb' ? 'rekkeviddedata mangler' : 'range data unavailable'),
  ].filter(Boolean).join(' · ');
}

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
  const modelName = formatModelName(host, trip.model);
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
  const variantSelect = host.querySelector('[data-variant-select]');
  let requestController;
  let requestNumber = 0;

  form.querySelectorAll('input[type="range"]').forEach((input) => {
    updateOutput(form, input.name, input.value);
    input.addEventListener('input', () => updateOutput(form, input.name, input.value));
  });

  form.elements.isTowing.addEventListener('change', () => {
    trailerControl.hidden = !form.elements.isTowing.checked;
  });

  async function loadVariants() {
    try {
      const response = await fetch(host.dataset.searchUrl, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: host.dataset.modelQuery,
          brands: ['Audi'],
          page: 1,
          pageSize: 50,
          includeDiscontinued: true,
        }),
      });
      if (!response.ok) throw new Error(`EVKX search returned ${response.status}`);
      const result = await response.json();
      const seen = new Set();
      const variants = (result.evs || [])
        .filter((variant) => belongsToModelFamily(host.dataset.modelFamily, variant.name))
        .filter((variant) => variant.evId && !seen.has(variant.evId) && seen.add(variant.evId));
      if (!variants.length) return;

      const defaultId = host.dataset.evId.toLowerCase();
      let selectedId = host.dataset.evId;
      const options = variants.map((variant) => {
        const option = document.createElement('option');
        option.value = variant.evId;
        option.textContent = variantLabel(host, variant);
        option.disabled = !isCalculableVariant(variant);
        if (defaultId === variant.evId.toLowerCase() || defaultId.endsWith(variant.evId.toLowerCase())) {
          selectedId = variant.evId;
        }
        return option;
      });

      if (selectedId === host.dataset.evId) {
        const fallback = document.createElement('option');
        fallback.value = host.dataset.evId;
        fallback.textContent = host.dataset.modelTitle;
        options.unshift(fallback);
      }
      variantSelect.replaceChildren(...options);
      variantSelect.value = selectedId;
    } catch (reason) {
      console.warn('Unable to load EVKX variants', reason);
    } finally {
      variantSelect.disabled = false;
    }
  }

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
      eVs: [data.get('vehicleId') || host.dataset.evId],
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

  variantSelect.addEventListener('change', calculate);
  loadVariants();
  calculate();
});
