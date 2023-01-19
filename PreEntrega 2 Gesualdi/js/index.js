
import * as functionalitis from "./functions.js";
import { stock } from "./stock.js";

let userMenuSelection = [],
  userProductSelection = [],
  price,
  userBuySelection = [],
  cart = [];


do {
  userMenuSelection = functionalitis.menuSelection(stock);

  while (functionalitis.loopChecker(userMenuSelection)) {
    functionalitis.invalid();
    userMenuSelection = functionalitis.menuSelection(stock);
  }

  if (userMenuSelection[0]) {
    do {
      userProductSelection = functionalitis.productsSelector(
        stock,
        userMenuSelection[0]
      );

      while (functionalitis.loopChecker(userProductSelection)) {
        functionalitis.invalid();
        userProductSelection = functionalitis.productsSelector(
          stock,
          userMenuSelection[0]
        );
      }

      if (userProductSelection[0]) {
        userBuySelection = functionalitis.infoPreview(
          stock,
          userMenuSelection[0],
          userProductSelection[0]
        );

        while (userBuySelection !== 0 && userBuySelection !== 1) {
          functionalitis.invalid();
          userBuySelection = functionalitis.infoPreview(
            stock,
            userMenuSelection[0],
            userProductSelection[0]
          );
        }

        if (userBuySelection) {
          cart.push(
            functionalitis.addToCart(
              stock,
              userMenuSelection[0],
              userProductSelection[0]
            )
          );

          userProductSelection[0] = 0;
        }
      }
    } while (userProductSelection[0]);
  }
} while (userMenuSelection[0]);

if (cart[0]) {
  price = functionalitis.discountCaller(cart);

  while (price === -1) {
    functionalitis.invalid();
    price = functionalitis.discountCaller(cart);
  }

  functionalitis.printCart(cart, price);
}
