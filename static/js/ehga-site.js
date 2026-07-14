(() => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.dataset.open !== 'true';
      nav.dataset.open = String(open);
      menuToggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    });
  }

  const languageToggle = document.querySelector('[data-language-toggle]');
  const languageMenu = document.querySelector('[data-language-menu]');
  if (languageToggle && languageMenu) {
    languageToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = languageMenu.hidden;
      languageMenu.hidden = !open;
      languageToggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', () => {
      languageMenu.hidden = true;
      languageToggle.setAttribute('aria-expanded', 'false');
    });
  }

  const search = document.querySelector('[data-site-search]');
  const results = document.querySelector('[data-search-results]');
  if (search && results) {
    let indexPromise;
    const loadIndex = () => indexPromise || (indexPromise = fetch(search.dataset.searchIndex || '/index.json').then((response) => response.json()));
    search.addEventListener('input', async () => {
      const query = search.value.trim().toLocaleLowerCase();
      if (query.length < 2) { results.hidden = true; results.innerHTML = ''; return; }
      try {
        const index = await loadIndex();
        const matches = index.filter((item) => `${item.title} ${item.content}`.toLocaleLowerCase().includes(query)).slice(0, 7);
        results.innerHTML = matches.length
          ? matches.map((item) => `<a class="search-result" href="${item.permalink}"><strong>${item.title}</strong></a>`).join('')
          : `<div class="search-result">${search.dataset.emptyLabel || 'No matching pages'}</div>`;
        results.hidden = false;
      } catch (_) { results.hidden = true; }
    });
    search.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { results.hidden = true; search.blur(); }
    });
  }

  document.querySelectorAll('[data-model-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.modelFilter;
      document.querySelectorAll('[data-model-filter]').forEach((item) => item.classList.toggle('chip--active', item === button));
      document.querySelectorAll('[data-model-card]').forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.status !== filter && card.dataset.market !== filter;
      });
    });
  });

  document.querySelectorAll('[data-spec-browser]').forEach((browser) => {
    const tabs = Array.from(browser.querySelectorAll('[data-spec-tab]'));
    const panels = Array.from(browser.querySelectorAll('[data-spec-panel]'));
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.specTab;
        tabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle('chip--active', active);
          item.setAttribute('aria-selected', String(active));
        });
        panels.forEach((panel) => { panel.hidden = panel.dataset.specPanel !== target; });
      });
    });
  });
})();
