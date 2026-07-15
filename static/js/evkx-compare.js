const tool = document.querySelector('[data-compare-tool]');

if (tool) {
  const apiBase = tool.dataset.apiBase || 'https://evkx.net/api/';
  const language = ['en', 'nb', 'de'].includes(tool.dataset.language) ? tool.dataset.language : 'en';
  const slots = Array.from(tool.querySelectorAll('[data-compare-slot]'));
  const openButton = tool.querySelector('[data-open-comparison]');
  const selected = new Map();

  const labels = {
    searching: tool.dataset.searchingLabel || 'Searching…',
    empty: tool.dataset.emptyLabel || 'No Audi variants found',
    error: tool.dataset.errorLabel || 'Search could not be loaded',
    ready: tool.dataset.readyLabel || 'Open comparison',
    incomplete: tool.dataset.incompleteLabel || 'Select at least two vehicles',
  };

  const renderMessage = (results, message) => {
    results.replaceChildren();
    const item = document.createElement('div');
    item.className = 'compare-slot__message';
    item.textContent = message;
    results.append(item);
    results.hidden = false;
  };

  const updateAction = () => {
    const ids = Array.from(selected.values()).map((vehicle) => vehicle.evId);
    openButton.disabled = ids.length < 2;
    openButton.textContent = ids.length < 2 ? labels.incomplete : labels.ready;
    openButton.dataset.ids = ids.join(',');
  };

  slots.forEach((slot, slotIndex) => {
    const input = slot.querySelector('[data-compare-search]');
    const results = slot.querySelector('[data-compare-results]');
    const searchControl = slot.querySelector('[data-search-control]');
    const selectedVehicle = slot.querySelector('[data-selected-vehicle]');
    const selectedName = slot.querySelector('[data-selected-name]');
    const clearButton = slot.querySelector('[data-clear-selection]');
    let requestNumber = 0;
    let debounce;

    const choose = (vehicle) => {
      selected.set(slotIndex, vehicle);
      selectedName.textContent = vehicle.name;
      selectedVehicle.hidden = false;
      searchControl.hidden = true;
      results.hidden = true;
      input.value = '';
      updateAction();
    };

    clearButton.addEventListener('click', () => {
      selected.delete(slotIndex);
      selectedVehicle.hidden = true;
      searchControl.hidden = false;
      input.focus();
      updateAction();
    });

    input.addEventListener('input', () => {
      window.clearTimeout(debounce);
      const query = input.value.trim();
      if (query.length < 2) {
        results.hidden = true;
        results.replaceChildren();
        return;
      }

      debounce = window.setTimeout(async () => {
        const currentRequest = ++requestNumber;
        renderMessage(results, labels.searching);
        try {
          const response = await fetch(new URL('evs/search', apiBase), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, brands: ['Audi'], page: 1, pageSize: 12, includeDiscontinued: true }),
          });
          if (!response.ok) throw new Error(`EVKX search returned ${response.status}`);
          const payload = await response.json();
          if (currentRequest !== requestNumber) return;

          const usedIds = new Set(Array.from(selected.values()).map((vehicle) => vehicle.evId));
          const vehicles = (payload.evs || []).filter((vehicle) => !usedIds.has(vehicle.evId));
          results.replaceChildren();
          if (!vehicles.length) {
            renderMessage(results, labels.empty);
            return;
          }

          vehicles.forEach((vehicle) => {
            const option = document.createElement('button');
            option.type = 'button';
            option.className = 'compare-slot__option';
            option.setAttribute('role', 'option');
            option.textContent = vehicle.name;
            option.addEventListener('click', () => choose(vehicle));
            results.append(option);
          });
          results.hidden = false;
        } catch (error) {
          console.error('Unable to search EVKX vehicles', error);
          if (currentRequest === requestNumber) renderMessage(results, labels.error);
        }
      }, 250);
    });
  });

  openButton.addEventListener('click', () => {
    if (openButton.disabled || !openButton.dataset.ids) return;
    const prefix = language === 'en' ? '' : `/${language}`;
    window.location.href = `https://evkx.net${prefix}/evcompare/?evs=${encodeURIComponent(openButton.dataset.ids)}`;
  });
}
