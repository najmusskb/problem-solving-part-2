// sob theke sostha phone konta seta bahir kora..............

const phones = [

    { name: 'samsung', price: 45000, camera: 10, storage: 32 },

    { name: 'walton', price: 15000, camera: 7, storage: 8 },

    { name: 'redmi', price: 13000, camera: 4, storage: 8 },

    { name: 'itel', price: 5000, camera: 7, storage: 32 },

    { name: 'Iphone', price: 115000, camera: 32, storage: 64 },

    { name: 'lava', price: 16000, camera: 64, storage: 32 },

    { name: 'oppo', price: 150100, camera: 128, storage: 4 },

    { name: 'micromax', price: 105000, camera: 8, storage: 64 },

    { name: 'htc', price: 2000, camera: 228, storage: 228 }

];

let cheapest = phones[0];
for (const phone of phones) {

    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);