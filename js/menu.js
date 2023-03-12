
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-menu]');
const menuLinks = document.querySelectorAll('.menu__link');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');


menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});


menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
