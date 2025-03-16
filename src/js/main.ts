const navToggleBtn = document.querySelector('.mobile-nav-toggle')!;
const primaryNav = document.querySelector('#primary-navigation')!;
const primaryheader = document.querySelector('.primary-header')!;

navToggleBtn.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
    ? navToggleBtn.setAttribute('aria-expanded', 'false')
    : navToggleBtn.setAttribute('aria-expanded', 'true');

    primaryNav.toggleAttribute('data-visible');
    primaryheader.toggleAttribute('data-overlay');
})