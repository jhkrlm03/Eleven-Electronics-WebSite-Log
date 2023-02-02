import { cart } from "./cart.js";
import { usPrice, noCero, sessionStorageSave } from "./functions.js";

/**
 * To manipulate the Cart Display
 * @type {HTMLElement}
 */
const cartDisplay = document.querySelector("#cart-display");

/**
 * To manipulate the Cart Display Container
 * @type {HTMLElement}
 */
const cartContainer = document.getElementById("cart-dsp-container");

/**
 * To manipulate the Void Card Message
 * @type {HTMLElement}
 */
const voidCardMsg = document.querySelector(".void-cart");

/**
 * To manipulate the total price div
 * @type {HTMLElement}
 */
const totalPriceDisplay = document.createElement("div");

totalPriceDisplay.className = "total-price";

/**
 * To manipulate the trash icon of the cards
 * @type {HTMLElement}
 */
const trash = document.getElementsByClassName("fa-trash");

/**
 * To turn blank the page and load the void msg
 * @param {Boolean} timer  Indicate if you want or not the 1.5s timer
 */
const displayErase = (timer) => {
  if (timer) {
    cartContainer.classList.add("erase");
    setInterval(() => {
      cartContainer.style.display = "none";
      voidCardMsg.style.display = "flex";
    }, 1500);
  } else {
    cartContainer.style.display = "none";
    voidCardMsg.style.display = "flex";
  }
};

/**
 * To check if the cart is or not void
 * @param {Boolean} timer  Indicate if you want or not the 1.5s timer
 */
const cartChecker = (timer) => {
  if (!noCero(cart).length) displayErase(timer);
};

/**
 *  To format prices with US format
 * @param {Number} el The target of the process
 * @returns {Array} The formatted int part of the price and then, the float one
 */
const priceFormatter = (price) => usPrice(price).toString().split(".");

/**
 * The total price of the cart
 * @type {Number}
 */
let totalPrice = cart.reduce((acc, el) => acc + el.price * el.boughtAmount, 0);

/**
 * The formatted price of @constant totalPrice
 * @type {Number}
 */
let formattedTotalPrice = priceFormatter(totalPrice);

/**
 * To print the total price of the transaction
 */
const printTotalPrice = (price) => {
  totalPriceDisplay.innerHTML = `
      <div><h3>Your total is: </h3><h3 class="final-price">$${price[0]}<sup>${price[1]}</sup></h3</div>
    `;

  cartDisplay.append(totalPriceDisplay);
};

const totalPriceUpdater = () => {
  totalPrice = noCero(cart).reduce(
    (acc, el) => acc + el.price * el.boughtAmount,
    0
  );
  formattedTotalPrice = priceFormatter(totalPrice);
  printTotalPrice(formattedTotalPrice);
};

cartChecker(false);

cart.forEach((el, i) => {
  const cartProdCard = document.createElement("div");
  cartProdCard.className = "cart-prod";

  const price = priceFormatter(el.price);

  cartProdCard.innerHTML = `<img src="${el.img}">
    <div class="characteristics">
      <h4>${el.name}</h4>
      <h3>${el.brand}</h3>
      <ul>
        <li><p>Category: <strong>${el.category}</strong></p></li>
        <li><p>Series: <strong>${el.series}</strong></p></li>
      </ul>
    </div>
    <input class="input-bought-amount" id="input-bought-amount${i}" type="number" name="amount" min="1" step="1" value="${el.boughtAmount}"> 
    <div class="pr-price">
      <h3>$${price[0]} <sup>${price[1]}</sup></h3>
    </div>
    <i class="fa-solid fa-trash"></i>`;
  cartDisplay.append(cartProdCard);

  let amountInput = document.getElementById(`input-bought-amount${i}`);

  amountInput.addEventListener("change", () => {
    cart[i].boughtAmount = amountInput.value;
    sessionStorageSave({ key: "cart", value: cart });

    totalPriceUpdater();
  });
});

printTotalPrice(formattedTotalPrice);

Array.from(trash).forEach((el, i) => {
  el.addEventListener("click", () => {
    document.getElementsByClassName("cart-prod").item(i).style.display = "none";

    cart[i] = 0;

    sessionStorageSave({ key: "cart", value: cart });
    cartChecker(true);

    totalPriceUpdater();
  });
});

document.getElementById("erase-btn").addEventListener("click", () => {
  cartContainer.classList.add("erase");

  displayErase(true);

  cart.splice(0, cart.length);
  sessionStorageSave({ key: "cart", value: cart });
});
