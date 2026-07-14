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
    const submit = document.querySelector('[data-search-submit]');
    let indexPromise;
    let requestId = 0;
    let displayedQuery = '';
    const loadIndex = () => indexPromise || (indexPromise = fetch(search.dataset.searchIndex || '/index.json').then((response) => {
      if (!response.ok) throw new Error(`Search index request failed: ${response.status}`);
      return response.json();
    }));
    const resultUrl = (item) => {
      const value = item.permalink || item.uri;
      if (!value) return '';
      try {
        const url = new URL(value, window.location.origin);
        return `${url.pathname}${url.search}${url.hash}`;
      } catch (_) {
        return value;
      }
    };
    const setOpen = (open) => {
      results.hidden = !open;
      search.setAttribute('aria-expanded', String(open));
    };
    const renderResults = (matches, query) => {
      results.replaceChildren();
      if (!matches.length) {
        const empty = document.createElement('div');
        empty.className = 'search-result';
        empty.textContent = search.dataset.emptyLabel || 'No matching pages';
        results.append(empty);
      } else {
        matches.forEach((item) => {
          const href = resultUrl(item);
          if (!href) return;
          const link = document.createElement('a');
          const title = document.createElement('strong');
          link.className = 'search-result';
          link.href = href;
          title.textContent = item.title || href;
          link.append(title);
          results.append(link);
        });
      }
      displayedQuery = query;
      setOpen(true);
    };
    const updateResults = async () => {
      const query = search.value.trim().toLocaleLowerCase();
      const currentRequest = ++requestId;
      if (query.length < 2) { results.replaceChildren(); setOpen(false); return; }
      try {
        const index = await loadIndex();
        if (currentRequest !== requestId) return;
        const matches = index.filter((item) => `${item.title || ''} ${item.content || ''}`.toLocaleLowerCase().includes(query)).slice(0, 7);
        renderResults(matches, query);
      } catch (_) { setOpen(false); }
    };
    const openFirstResult = async () => {
      if (search.value.trim().length < 2) { search.focus(); return; }
      const query = search.value.trim().toLocaleLowerCase();
      if (results.hidden || displayedQuery !== query) await updateResults();
      const firstResult = results.querySelector('a');
      if (firstResult) firstResult.click();
    };
    search.addEventListener('input', updateResults);
    if (submit) submit.addEventListener('click', openFirstResult);
    search.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') { event.preventDefault(); openFirstResult(); }
      if (event.key === 'ArrowDown') {
        const firstResult = results.querySelector('a');
        if (firstResult) { event.preventDefault(); firstResult.focus(); }
      }
      if (event.key === 'Escape') { setOpen(false); search.blur(); }
    });
    document.addEventListener('click', (event) => {
      if (!results.contains(event.target) && event.target !== search && event.target !== submit) setOpen(false);
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
