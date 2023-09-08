const products = [
  {
    id: 1,
    title: "The Dandy Chair",
    price: 250,
    image: "./assets/image/chair.jpeg",
    type: "furniture",
    designer: "Robert Smith",
  },
  {
    id: 2,
    title: "Rustic Vase Set",
    price: 155,
    image: "./assets/image/vase-set.png",
    type: "homeware",
    designer: "Liam Gallagher",
  },
  {
    id: 3,
    title: "The Silky Vase",
    price: 125,
    image: "./assets/image/silky-vase.png",
    type: "homeware",
    designer: "Biggie Smalls",
  },
  {
    id: 4,
    title: "The Lucy Lamp",
    price: 399,
    image: "./assets/image/lucy-lamp.png",
    type: "lightFittings",
    designer: "Thom Yorke",
  },
  {
    id: 5,
    title: "The Dark Chair",
    price: 249,
    image: "./assets/image/dark-chair.png",
    type: "furniture",
    designer: "Robert Smith",
  },
  {
    id: 6,
    title: "The Multiple Chairs",
    price: 155,
    image: "./assets/image/multiple-chairs.png",
    type: "furniture",
    designer: "Liam Gallagher",
  },
  {
    id: 7,
    title: "The Multiple Lamps",
    price: 120,
    image: "./assets/image/multiple-lamps.png",
    type: "lightFittings",
    designer: "Thom Yorke",
  },
  {
    id: 8,
    title: "The Small Vase",
    price: 78,
    image: "./assets/image/small-vase.png",
    type: "homeware",
    designer: "Biggie Smalls",
  },
  {
    id: 9,
    title: "The Yellow Chair",
    price: 120,
    image: "./assets/image/yellow-chair.png",
    type: "furniture",
    designer: "Robert Smith",
  },
];

// Product hiç yoksa empty array ata
function renderProducts(products = []) {
  const productsDom = document.getElementById("products");
  const html = products.map((product) => {
    return `<div class="product">
    <img class="image" src="${product.image}" alt="${product.title}" />
    <div class="title h4">${product.title}</div>
    <div class="subtitle text-lg">£${product.price}</div>
    </div>`;
  });
  productsDom.innerHTML = html.join("");
}

renderProducts(products);
