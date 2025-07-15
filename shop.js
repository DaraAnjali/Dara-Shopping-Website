// Add to Cart functionality using localStorage
document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const name = this.dataset.name;
            const price = this.dataset.price;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            let existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ name, price, qty: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${name} added to cart!`);
        });
    });
});
