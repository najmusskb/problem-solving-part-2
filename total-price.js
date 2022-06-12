const products = [

    { name: 'laptop', price: 43000 },
    { name: 'shart', price: 3000 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 },
]

let totalprice = 0;
for (const product of products) {

    totalprice = totalprice + product.price;

}

console.log("total product price:", totalprice);