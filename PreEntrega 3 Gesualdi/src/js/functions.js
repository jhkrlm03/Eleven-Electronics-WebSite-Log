/**
 * The functions that the program need
 * @module functions 
 */

/**
 * Argentinian Added Value Tax (Impuesto al Valor Agregado)
 * @type {Number}
 */
const iva = 21;

/**
 * Add IVA tax to a specific price
 * @function addIva
 * @param {Number} priceWhitoutIva The original price of the product
 * @returns {Number} The price with the IVA tax
 */
const addIva = (priceWhitoutIva) => priceWhitoutIva + (priceWhitoutIva * iva) / 100;

/**
 * Add the discount that the user entered
 * @function addDiscount
 * @param {Number} price Original price
 * @param {Number} discount Discount persent value
 * @returns The price without the discount persent
 */
const addDiscount = (price, discount) => price - (price * discount) / 100;


/**
 * Returns the string which we can print with the argentinian price form
 * @param {Number} price The price we need to print
 * @returns {String} The string we can show to the user
 */
const printPriceARG = (price) =>
    "$" + new Intl.NumberFormat("es-AR", {}).format(price);

/**
 * To get the basic information of a product
 * @param {Object} element The obj with the product information that we need to get (brand, name, price)
 * @returns {String} The string with that information
 */
/*const getRapidInfo = (element) =>
    element.brand + " " + element.name + " " + printPriceARG(element.price);*/


export{ iva, addIva, addDiscount, printPriceARG }