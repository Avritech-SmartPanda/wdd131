document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Product A" },
        { name: "Product B" },
        { name: "Product C" },
        { name: "Product D" }
    ];

    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
