const iva = 21,


 addIva = (priceWhitoutIva) => priceWhitoutIva + (priceWhitoutIva * iva) / 100,

 addDiscount = (price, discount) => price - (price * discount) / 100,

 invalid = () => alert("EL DATO INGRESADO NO FUE VALIDO"),


 loopChecker = (array) =>
    array[0] % 1 !== 0 || array[0] < 0 || (array[0] > 0 && array[0] > array[1]),

 printPriceARG = (price) =>
    "$" + new Intl.NumberFormat("es-AR", {}).format(price),

 getRapidInfo = (element) =>
    element.brand + " " + element.name + " " + printPriceARG(element.price),
  
  getCategories = (selection) => {
    switch (selection) {
      case 1:
        return "Tarjetas Gráficas";

      case 2:
        return "Procesadores de Escritorio";

      case 3:
        return "Memorias RAM";

      case 4:
        return "Gabinetes de Escritorio";
    }
  },
  
  printCategories = (array) => {
    return (
      "1. " +
      [...new Set(
          array.map((el) => el.category)
        ),
      ].reduce((acc, el, inx) => (acc = acc + "\n" + (inx + 1) + ". " + el))
    );
  },
  
  menuSelection = (array) => {
    const options = printCategories(array);

    return [
      parseFloat(
        prompt(
          "Seleccione una de las categorias: \n" +
            "0. Finalizar compra \n" +
            options
        )
      ),
      options.split("\n").length,
    ];
  },

  productsSelector = (array, categoryInx) => {
    const options = array
      .filter((el) => el.category === getCategories(categoryInx))
      .map((el) => getRapidInfo(el));

    const userChoice = parseFloat(
      prompt(
        "Seleccione un articulo indicando su índice o 0 para regresar: \n" +
          options.join("\n")
      )
    );

    return [userChoice, options.length];
  },

  infoPreview = (array, categoryInx, productInx) => {
    let newArray = Object.entries(
      array.filter((el) => el.category === getCategories(categoryInx))[
        productInx - 1
      ]
    ).filter(
      (el) => el[1] !== false && el[0] !== "category" && el[1] !== undefined
    );

    newArray[0][1] = printPriceARG(newArray[0][1]);
    return parseFloat(
      prompt(
        "Pulse: 1.Continuar ///" +
          "/// 0.Regresar \n" +
          newArray.join("\n").split(",").join(": ")
      )
    );
  },

  addToCart = (array, categoryInx, productInx) => {
    return array.filter((el) => el.category === getCategories(categoryInx))[
      productInx - 1
    ];
  },

  getDiscount = (array, discount) => {
    return addDiscount(
      array.reduce((acc, el) => acc + el.price, 0),
      discount
    );
  },

  discountCodesChecker = (array, userSelection) => {
    if (userSelection === "descuento 20") return getDiscount(array, 20);

    else if (userSelection === "descuento 50") return getDiscount(array, 50);

    else if (userSelection === "0") return getDiscount(array, 0);

    else return -1;
  },

  discountCaller = (array) => {
    const userDiscountSelector = prompt(
      "Si quiere utilizar un codigo de descuento introduzcalo \n" +
        "En caso contrario introduzca 0"
    );
    return discountCodesChecker(array, userDiscountSelector);
  },

  printCart = (array, price) => {
    let cart;

    cart = array.map((el) => getRapidInfo(el)).join("\n");

    alert(
      "Su carrito es: \n" +
        cart +
        "\n" +
        "Siendo el TOTAL: " +
        printPriceARG(price)
    );
  };

export {
  addIva,
  invalid,
  loopChecker,
  menuSelection,
  productsSelector,
  infoPreview,
  addToCart,
  discountCaller,
  printCart,
};
