// Fetch products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

// Display products
function showProducts() {
    let box = document.getElementById("product-list");
    box.innerHTML = "";

    products.forEach((p, index) => {
        box.innerHTML += `
            <div class="product">
                <img src="${p.image}" alt="Product">
                <h3>${p.name}</h3>
                <p>₹ ${p.price}</p>
            </div>
        `;
    });
}

showProducts();
