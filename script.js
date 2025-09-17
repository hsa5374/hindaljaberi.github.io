// SCROLL BUTTON FROM HOME TO MENU
document.getElementById("to-menu").addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({behavior:"smooth"});
});

// CHAI MENU INTERACTIVITY
let tempChoice = "";
let sizeChoice = "";
let milkChoice = "";
let sweetness = 50;

const tempButtons = document.querySelectorAll(".temp-btn");
const sizeButtons = document.querySelectorAll(".size-btn");
const milkButtons = document.querySelectorAll(".milk-btn");
const addToCartBtn = document.getElementById("add-to-cart");
const sweetMinus = document.getElementById("sweet-minus");
const sweetPlus = document.getElementById("sweet-plus");
const sweetDisplay = document.getElementById("sweetness");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const thankYou = document.getElementById("thank-you");

function updateAddButton() {
  if(tempChoice && sizeChoice && milkChoice) {
    addToCartBtn.style.display = "inline-block";
  } else {
    addToCartBtn.style.display = "none";
  }
}

// Temperature selection
tempButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tempChoice = btn.textContent;
    tempButtons.forEach(b => b.style.opacity=.6);
    btn.style.opacity=1;
    updateAddButton();
  });
});

// Size selection
sizeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    sizeChoice = btn.textContent;
    sizeButtons.forEach(b => b.style.opacity=.6);
    btn.style.opacity=1;
    updateAddButton();
  });
});

// Milk selection
milkButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    milkChoice = btn.textContent;
    milkButtons.forEach(b => b.style.opacity=.6);
    btn.style.opacity=1;
    updateAddButton();
  });
});

// Sweetness buttons
sweetMinus.addEventListener("click", () => {
  if(sweetness>0) sweetness -= 10;
  sweetDisplay.textContent = sweetness + "%";
});
sweetPlus.addEventListener("click", () => {
  if(sweetness<100) sweetness += 10;
  sweetDisplay.textContent = sweetness + "%";
});

// Add to cart
let cart = [];
addToCartBtn.addEventListener("click", () => {
  const chai = {
    temp: tempChoice,
    size: sizeChoice,
    milk: milkChoice,
    sweetness: sweetness
  };
  cart.push(chai);
  cartCount.textContent = cart.length;
  renderCart();
});

// Render cart
function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h4>Chai Latte ${i+1}</h4>
      <p>${item.temp}, ${item.size}, ${item.milk}, Sweetness: ${item.sweetness}%</p>
      <p>Price: $4 | Qty: 1</p>
      <hr>
    `;
    cartItems.appendChild(div);
  });
}

// Checkout
checkoutBtn.addEventListener("click", () => {
  thankYou.style.display="block";
  cart = [];
  cartCount.textContent = "0";
  renderCart();
});
