const cart = [

    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shart', price: 3000, quantity: 5 },
    { name: 'watch', price: 3680, quantity: 2 },
    { name: 'phone', price: 55000, quantity: 1 },
]

let carttotal = 0;
for (const product of cart) {

    console.log(product);

    const productotal = product.price * product.quantity;
    carttotal = carttotal + productotal;

}

console.log("total cart price:", carttotal);