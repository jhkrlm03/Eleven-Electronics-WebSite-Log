import { stock } from "./stock.js";

const productList = document.querySelector("#prod-list");

const prImg = stock.map((el) => el.img);

console.log(prImg);

const prName = stock.map((el) => el.name);

const prBrand = stock.map((el) => el.brand);

const prPrice = stock.map((el) => el.price);

prName.forEach((el, i) => {
  const div = document.createElement("div");
  div.innerHTML = ` <img src="${prImg[i]}">
    <div class="description">
      <h6 class="prod-brand"> 
        ${prBrand[i]} 
      </h6> 
      <h5 class="prod-name">
        ${el}
      </h5> 
        <h4 class="prod-price">
          $${prPrice[i]}
        </h4> 
    </div>
    <i class="fa-solid fa-cart-shopping" id="fast-purchase"></i>`;

  div.className = "product";
  productList.append(div);
});
