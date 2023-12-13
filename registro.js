document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    const productList = document.getElementById("productList");
    loadSavedProducts();

    productForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const productName = document.getElementById("productName").value;
        const productPrice = document.getElementById("productPrice").value;
        const productImageURL = document.getElementById("productImage").value;

        if (productName && productPrice && productImageURL) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><img src="${productImageURL}" alt="${productName}" width="100"></td>
                <td>${productName}</td>
                <td>$${productPrice}</td>
            `;
            productList.appendChild(newRow);
            saveProduct(productName, productPrice, productImageURL);

            productForm.reset();
        }
    });

    function saveProduct(name, price, image) {
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        savedProducts.push({ name, price, image });
        localStorage.setItem("products", JSON.stringify(savedProducts));
    }

    function loadSavedProducts() {
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        savedProducts.forEach((product) => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" width="100"></td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
            `;
            productList.appendChild(newRow);
        });
    }
});
