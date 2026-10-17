(() => {
  const params = new URLSearchParams(location.search);
  const language = params.get('lang') === 'ar' ? 'ar' : 'en';
  document.documentElement.classList.add('js');
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-language]').forEach(section => {
    const active = section.dataset.language === language;
    section.classList.toggle('active-language', active);
    section.hidden = !active;
  });
  document.querySelectorAll('[data-language-link]').forEach(link => {
    const target = link.dataset.languageLink;
    const url = new URL(location.href);
    url.searchParams.set('lang', target);
    url.hash = '';
    link.href = url.pathname + url.search;
    link.setAttribute('aria-current', String(target === language));
  });
  document.querySelectorAll('[data-local-link]').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('lang', language);
    link.href = url.pathname + url.search + url.hash;
  });
  const title = document.querySelector(`[data-language="${language}"] h1`);
  if (title) document.title = `${title.textContent} · Hafizun Kids`;
})();
