const  GoogleSheets  = require("./connectionWithGoogle");
const products = require("./products");
 products.module.forEach(product =>{
    GoogleSheets.sendData(product);
})
