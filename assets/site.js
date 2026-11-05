// Navigation is visible without JavaScript; enhance to a compact mobile menu.
const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (nav && toggle && links) {
  nav.classList.add('js-nav');
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  });
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openGuide = nav.querySelector('details[open]');
      nav.querySelectorAll('details[open]').forEach(detail => { detail.open = false; });
      if (toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      } else if (openGuide) {
        openGuide.querySelector('summary').focus();
      }
    }
  });
}
