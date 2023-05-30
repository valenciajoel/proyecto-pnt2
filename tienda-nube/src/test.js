const  GoogleSheets  = require("./connectionWithGoogle");
const products = require("./products");
console.log(products[0])

GoogleSheets.sendData(products[0]); 