let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct() {
    let name = document.getElementById("pname").value;
    let price = document.getElementById("pprice").value;
    let image = document.getElementById("pimage").value;

    if (name === "" || price === "" || image === "") {
        alert("Please fill all fields");
        return;
    }

    products.push({ name, price, image });
    localStorage.setItem("products", JSON.stringify(products));

    showAdminProducts();
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    showAdminProducts();
}

function showAdminProducts() {
    let box = document.getElementById("admin-products");
    box.innerHTML = "";

    products.forEach((p, i) => {
        box.innerHTML += `
            <div class="product-row">
                ${p.name} - ₹${p.price}
                <button onclick="deleteProduct(${i})">Delete</button>
            </div>
        `;
    });
}

showAdminProducts();
