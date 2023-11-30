// 3. Shoppingcart (3p)
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter
// som input och returnerar det totala priset

const products = [
  { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
  { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
];

const products2 = [
  { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
  { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
  { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
];

// 1. skapa variabel som håller reda på totala priset
// 2. loopa listan och plocka ut priset för varje produkt.
// 3. addera varje produkts pris till totala priset.
// 4. returnera totala priset.

const goPro = { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 };
const goProPrice = goPro.price;

function calculateTotalPrice(shoppingCart) {
  // Din kod här
  let totalPrice = 0;

  shoppingCart.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}

console.log(calculateTotalPrice(products)); // Ska logga 220
console.log(calculateTotalPrice(products2)); // Ska logga 330
