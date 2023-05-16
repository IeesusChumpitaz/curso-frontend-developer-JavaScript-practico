const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuCar = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
iconMenuCar.addEventListener("click", toggleShoppingCartContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isShoppingCartContainerClose =
    shoppingCartContainer.classList.contains("inactive");

  if (!isShoppingCartContainerClose) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isShoppingCartContainerClose =
    shoppingCartContainer.classList.contains("inactive");

  if (!isShoppingCartContainerClose) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCartContainer() {
  const ismobileMenuClose = mobileMenu.classList.contains("inactive");
  const isDestopMenuClose = desktopMenu.classList.contains("inactive");
  const isproductDetailContainer =
    productDetailContainer.classList.contains("inactive");

  if (!ismobileMenuClose || !isDestopMenuClose) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }
  closeProductDetailAside();

  shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "bike",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 1499,
  image:
    "https://images.samsung.com/is/image/samsung/p6pim/pe/ls32ag550elxpe/gallery/pe-odyssey-g5-g55a-ls32ag550elxpe-530520372?$1300_1038_PNG$",
});
productList.push({
  name: "audifonos",
  price: 299,
  image:
    "https://falabella.scene7.com/is/image/FalabellaPE/gsc_114059780_859686_1?wid=800&hei=800&qlt=70",
});

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("P");
    productPrice.innerText = `$ ${product.price}`;

    const productName = document.createElement("P");
    productName.innerText = `${product.name}`;

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
