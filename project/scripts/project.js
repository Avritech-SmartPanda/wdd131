
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (form || feedback) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);

            feedback.textContent = `Thank you, ${formData.get("name")}! We'll get back to you shortly.`;
            feedback.style.display = "block";
            form.reset();

            setTimeout(() => {
                feedback.textContent = "";
                feedback.style.display = "none";
            }, 5000);
        });
    }
});


const products = [
    { id: 1, name: "Elegant Bracelet", description: "A stunning rope bracelet with intricate designs.", price: "R25.00", image: "images/product1.webp", category: "bracelet" },
    { id: 2, name: "Charming Anklet", description: "A beautiful beaded anklet with a timeless design.", price: "R45.00", image: "images/product2.webp", category: "anklet" },
    { id: 3, name: "Charming Anklet", description: "Delicate anklet adorned with beautiful charms.", price: "R18.00", image: "images/product3.webp", category: "anklet" },
    { id: 4, name: "Waist Beads", description: "Elegant waist beads designed to enhance your beauty.", price: "R15.00", image: "images/product4.webp", category: "waistbeads" },
    { id: 5, name: "Beaded Bracelet Set", description: "Stunning bracelet set with intricate designs", price: "R50.00", image: "images/product5.webp", category: "bracelet" },
    { id: 6, name: "Crystal Necklace", description: "A striking necklace featuring a large crystal pendant.", price: "R22.00", image: "images/product6.webp", category: "necklace" },
    { id: 7, name: "Beaded Anklet", description: "A colorful beaded anklet that adds a touch of fun to your look.", price: "R30.00", image: "images/product7.webp", category: "anklet" },
    { id: 8, name: "Waist Beads", description: "A classic waist beads that exudes sophistication.", price: "R40.00", image: "images/product8.webp", category: "waistbeads" },
    { id: 9, name: "Silver Bracelet", description: "A simple yet elegant silver bracelet that complements any outfit.", price: "R20.00", image: "images/product9.webp", category: "bracelet" }
];


const productGrid = document.getElementById("productGrid");
const categoryRadios = document.querySelectorAll('input[name="category"]');


const renderProducts = (filteredProducts) => {
    debugger;
    productGrid.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.classList.add("product-image");
        img.loading = "lazy";
        img.width = 250;
        img.height = 250;
        card.appendChild(img);

        const name = document.createElement("h3");
        name.textContent = product.name;
        card.appendChild(name);

        const description = document.createElement("p");
        description.textContent = product.description;
        card.appendChild(description);

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = product.price;
        card.appendChild(price);

        const button = document.createElement("button");
        button.classList.add("btn", "details-btn");
        button.textContent = "Add to Cart";
        card.appendChild(button);

        productGrid.appendChild(card);
    });
};


categoryRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        const selectedCategory = document.querySelector('input[name="category"]:checked').value;
        const filteredProducts = selectedCategory === "all"
            ? products
            : products.filter(product => product.category === selectedCategory);
        renderProducts(filteredProducts);
    });
});


const filterItems = [
    { id: "all", value: "all", heading: "All Categories", checked: true },
    { id: "bracelet", value: "bracelet", heading: "Bracelets", checked: false },
    { id: "anklet", value: "anklet", heading: "Anklets", checked: false },
    { id: "waistbeads", value: "waistbeads", heading: "Waist Beads", checked: false },
    { id: "necklace", value: "necklace", heading: "Necklaces", checked: false }
];


const filterSection = document.getElementById('filter-section');
if (filterSection) {
    const filterGrid = document.createElement('ul');
    filterGrid.className = 'filter-grid';

    function createFilterItem(item) {
        const li = document.createElement('li');

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = item.id;
        input.name = 'category';
        input.value = item.value;
        input.className = 'hidden-input';
        if (item.checked) input.checked = true;

        const label = document.createElement('label');
        label.htmlFor = item.id;
        label.className = 'filter-item';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'filter-content';

        const headingDiv = document.createElement('div');
        headingDiv.className = 'filter-heading';
        headingDiv.textContent = item.heading;

        contentDiv.appendChild(headingDiv); 
        label.appendChild(contentDiv);
        li.appendChild(input);
        li.appendChild(label);

        return li;
    }

    filterItems.forEach(item => {
        const filterItem = createFilterItem(item);
        filterGrid.appendChild(filterItem);
    });

    filterSection.innerHTML = '';
    filterSection.appendChild(filterGrid);
}


renderProducts(products);
