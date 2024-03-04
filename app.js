const products = [
    {
        id: 1,
        name: "Adidas Yeezy Boost 350 V2",
        price: 220,
        image: "./imgs/hippie.png",
    },
    {
        id: 2,
        name: "Nike Air Max 1 'Evergreen Aura'",
        price: 140,
        image: "./imgs/air2.png",
    },
    {
        id: 3,
        name: "Jordan 1 Retro High Dark Mocha",
        price: 170,
        image: "./imgs/jordan.png",
    },
    {
        id: 4,
        name: "Nike Dunk Low SP Champ Colors",
        price: 100,
        image: "./imgs/crater2.png",
    },
    {
        id: 5,
        name: "Adidas Boost 700 V3 Srphym",
        price: 200,
        image: "./imgs/hippie.png",
    },
    {
        id: 6,
        name: "Skechers D'Lites 3.0",
        price: 70,
        image: "./imgs/air.png",
    },
];

const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");
function myFunction(x) {
    x.classList.toggle("change");
  }
  
menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedItem = document.querySelector(".selectedItem");
        selectedItem.classList.remove("selectedItem");
        menuItem.classList.add("selectedItem");
    });
});

const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");

searchProducts = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        `;
        searchResultsDiv.appendChild(productDiv);
    });
};

clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
        searchResults.remove();
    }
};

searchButton.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        searchProducts();
    }
});

document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});
function myFunction(x) {
    x.classList.toggle("change");
    
  }
  
