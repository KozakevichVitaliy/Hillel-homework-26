const products = [
  { name: "Ноутбук", price: 30000, inStock: true },
  { name: "Миша", price: 800, inStock: false },
  { name: "Клавіатура", price: 2500, inStock: true },
  { name: "Килимок", price: 300, inStock: true },
];

let filterChip = "all"; // all, inStock, notInStock

const list = document.querySelector("ul");

const renderProducts = () => {
  list.innerHTML = "";

  const filteredProducts = products.filter((item) => {
    switch (filterChip) {
        case 'all':
            return true;
        case 'inStock':
            return item.inStock ? true : false;
        case 'notInStock':
            return item.inStock ? false : true;
        default:
            break;
        }
  });

  filteredProducts.forEach((item) => {
    const product = `
        <li class="product">
        <h6>${item.name}</h6>
        <p>Price: ${item.price}</p>
        <p>In stock: ${item.inStock ? "Yes" : "No"}
        </li>
    `;
    list.insertAdjacentHTML("beforeend", product);
  });
};

renderProducts();

const inStockBtn = document.querySelector("#inStock");
const allBtn = document.querySelector("#all");
const notInStockBtn = document.querySelector("#notInStock");

const handleStockButtonClick = () => {
  filterChip = "inStock";
  console.log(filterChip);
  renderProducts();
};

const handleAllButtonClick = () => {
  filterChip = "all";
  console.log(filterChip);
  renderProducts();
};

const handleNotInStockButtonClick = () => {
  filterChip = "notInStock";
  console.log(filterChip);
  renderProducts();
};

inStockBtn.addEventListener("click", handleStockButtonClick);
allBtn.addEventListener("click", handleAllButtonClick);
notInStockBtn.addEventListener("click", handleNotInStockButtonClick);