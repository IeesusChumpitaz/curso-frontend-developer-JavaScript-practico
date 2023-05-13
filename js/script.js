const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuCar = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingMenu = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
iconMenuCar.addEventListener("click", toggleShoppingMenu);

function toggleDesktopMenu() {
  const isShoppingMenuClose = shoppingMenu.classList.contains("inactive");

  if (!isShoppingMenuClose) {
    shoppingMenu.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isShoppingMenuClose = shoppingMenu.classList.contains("inactive");

  if (!isShoppingMenuClose) {
    shoppingMenu.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
function toggleShoppingMenu() {
  const ismobileMenuClose = mobileMenu.classList.contains("inactive");
  const isDestopMenuClose = desktopMenu.classList.contains("inactive");

  if (!ismobileMenuClose || !isDestopMenuClose) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }

  shoppingMenu.classList.toggle("inactive");
  console.log("click");
}
