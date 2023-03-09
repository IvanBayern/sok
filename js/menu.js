// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();

// Get references to the relevant elements
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-menu]');
const menuLinks = document.querySelectorAll('.menu__link');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

// Add event listeners to open and close the mobile menu
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});

// Add event listeners to close the mobile menu when a menu item is clicked
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
