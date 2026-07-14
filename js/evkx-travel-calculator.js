const host = document.querySelector('[data-evkx-travel-calculator]');

if (host) {
  const assetBase = host.dataset.assetBase || 'https://media.evkx.net/wwwroot/assets/travelcalculator/';
  const manifestUrl = new URL('manifest.json', assetBase);

  try {
    const response = await fetch(manifestUrl, { mode: 'cors' });
    if (!response.ok) throw new Error(`EVKX manifest returned ${response.status}`);

    const manifest = await response.json();
    const scriptPath = manifest['index.html']?.file;
    const cssPath = manifest['style.css']?.file;
    if (!scriptPath || !cssPath) throw new Error('EVKX calculator assets are missing from the manifest');

    host.dataset.cssHref = new URL(cssPath, assetBase).href;
    await import(new URL(scriptPath, assetBase).href);
  } catch (error) {
    console.error('Unable to load the EVKX range calculator', error);
    const norwegian = host.dataset.lang === 'nb';
    const fallbackUrl = `https://evkx.net/${norwegian ? 'nb/' : ''}evcompare/travelcalculator/?evs=${encodeURIComponent(host.dataset.evId || '')}`;
    host.innerHTML = `<p class="model-calculator__error">${norwegian ? 'Kalkulatoren kunne ikke lastes.' : 'The calculator could not be loaded.'} <a href="${fallbackUrl}">${norwegian ? 'Åpne den på EVKX.net' : 'Open it on EVKX.net'}</a>.</p>`;
  }
}
