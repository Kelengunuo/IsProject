// script.js
const flowersContainer = document.getElementById("flowers");

// Example flower data (replace with your own data from backend)
const flowers = [
    { name: "Rose", price: 10 },
    { name: "Lily", price: 15 },
    { name: "Tulip", price: 8 }
];

// Function to render flowers
function renderFlowers() {
    flowersContainer.innerHTML = "";
    flowers.forEach(flower => {
        const flowerCard = document.createElement("div");
        flowerCard.classList.add("flower-card");
        flowerCard.innerHTML = `
            <h2>${flower.name}</h2>
            <p>$${flower.price}</p>
            <button>Add to Cart</button>
        `;
        flowersContainer.appendChild(flowerCard);
    });
}

// Call renderFlowers function when page loads
window.onload = renderFlowers;
