let cart = [];
let total = 0;
function selectSize(element) {
    const parent = element.parentElement;
    const sizes = parent.querySelectorAll("span");

    sizes.forEach(s => s.classList.remove("active"));
    element.classList.add("active");
}

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function addToCart(name, price, sizeContainerId) {

    const sizeContainer = document.getElementById(sizeContainerId);
    const selected = sizeContainer.querySelector(".active");

    if (!selected) {
        alert("Please select a size!");
        return;
    }

    const size = selected.innerText;

    cart.push({ name, price, size });
    total += price;

    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");

    if (!cartList) return;

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        cartList.innerHTML += `
      <li>
        ${item.name} (${item.size}) - ₹${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </li>
    `;
    });

    cartCount.innerText = cart.length;
}