import { stock } from "./stock.js";

import { cart } from "./cart.js";

import { usPrice } from "./functions.js";

const productList = document.querySelector("#prod-list");

stock.forEach((el) => {
  const div = document.createElement("div");
  const price = usPrice(el.price).toString().split(".");

  div.innerHTML = ` <img src="${el.img}">
    <div class="description">
      <h6 class="prod-brand"> 
        ${el.brand} 
      </h6> 
      <h5 class="prod-name">
        ${el.name}
      </h5> 
    </div>
    <div class="price-btn">
      <h4 class="prod-price">
        $${price[0]} <sup>${price[1]}</sup>
      </h4> 
      <div class="buy"></div>
    </div> `;

  div.className = "product";
  productList.append(div);
});


Array.from(document.getElementsByClassName("buy")).forEach((el, i) => {
  const buy = document.createElement("i");

  buy.className = "fa-solid fa-cart-shopping";
  buy.setAttribute = "fast-buy";
  el.append(buy);

  buy.addEventListener("click", () => {
    const existingElement = cart.find(
      (cartProd) => cartProd.name === stock[i].name
    );

    const boughtAmount = (existingElement?.boughtAmount || 0) + 1;

    if (existingElement) {
      existingElement.boughtAmount = boughtAmount;
    } else {
      cart.push({
        boughtAmount,
        ...stock[i],
      });
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
  });
});
