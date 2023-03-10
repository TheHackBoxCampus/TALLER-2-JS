let buys = parseInt(prompt("\tIngrese el numero de productos que quiere comprar")); 
let amount_client = parseFloat(prompt("\tIngrese su cantidad de dinero"))
let x = 0; 
let total_products = [];
let total_price = [];

while(x < buys) {
    let name_product = prompt("\tIngrese el nombre del producto:");
    let price = parseInt(prompt("\tIngrese el precio:"));
    total_products.push(name_product) 
    total_price.push(price)
    x+=1; 
}   

let products = total_products.map(product => product)
let total_buy = total_price.reduce((ac,itm) => ac + itm);

console.log(`
---------------------------------
Producto/s: ${products}
cantidad a pagar: ${total_buy}
cantidad del cliente: ${amount_client}
vueltos: ${amount_client - total_buy}
---------------------------------
`)