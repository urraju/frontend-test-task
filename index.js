let selectedColor = "purple";
let selectedSize = "S";

  // local images
const images = {
  purple: "./images/purple.png",
  black: "./images/black.png",
  blue: "./images/blue.png",
  cyan: "./images/cyan.png",
};

function changeThumbnail(color) {
  selectedColor = color;
  document.getElementById("thumbnail").src = images[color];
}

function setSize(size) {
  selectedSize = size;
}

function addToCart() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = 79.0;

  cart.push({
    name: "Classy Modern Smart Watch",
    image: "./images/black.png",
    color: selectedColor,
    size: selectedSize,
    quantity: quantity,
    price: price * quantity,
  });

  updateFloatingCheckout();
}

function updateFloatingCheckout() {
  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("floatingCheckout").classList.remove("hidden");
}

let cart = [];

function showCartModal() {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceContainer = document.getElementById("totalPrice");
  const totalQuantityContainer = document.getElementById("totalQuantity");

  cartItemsContainer.innerHTML = ""; // Clear existing content
  let totalPrice = 0;
  let totalQuantity = 0;

  // Populate the table with cart items
  cart.forEach((item) => {
    totalPrice += item.price;
    totalQuantity += item.quantity;

    cartItemsContainer.innerHTML += `
      <tr class="border-b">
        <td class="p-2 flex items-center space-x-2">
          <img src="${item.image}" alt="${item.name}" class="w-10 h-10 rounded">
          <span class="text-gray-700">${item.name}</span>
        </td>
        <td class="p-2 text-gray-600">${item.color}</td>
        <td class="p-2 font-semibold text-gray-700">${item.size}</td>
        <td class="p-2 text-center text-gray-700">${item.quantity}</td>
        <td class="p-2 text-right font-semibold text-gray-800">$${item.price}</td>
      </tr>
    `;
  });

  // Update the total price and quantity
  totalPriceContainer.innerText = `$${totalPrice.toFixed(2)}`;
  totalQuantityContainer.innerText = totalQuantity;

  // Show the modal
  document.getElementById("cartModal").classList.remove("hidden");
}

function closeCartModal() {
  document.getElementById("cartModal").classList.add("hidden");
}

// brand color functionality

function changeThumbnail(color, activeBorderClass, element) {
  // Update the thumbnail image
  document.getElementById("thumbnail").src = images[color];

  // Reset all borders
  document.querySelectorAll(".color-option").forEach((div) => {
    div.classList.remove(
      "border-2",
      "border-[#816BFF]",
      "border-black",
      "border-[#06B6D4]"
    );
  });

  // Add active border class to the clicked element
  element.classList.add("border-2", activeBorderClass);
}

// wrant size functonality

function setSize(size, element) {
  // Remove active classes from all buttons
  document.querySelectorAll(".size-option").forEach((btn) => {
    btn.classList.remove("border-[#816BFF]", "text-[#816BFF]");
    btn.classList.add("border-gray-300", "text-gray-500");
  });

  // Add active border and text color to the clicked button
  element.classList.remove("border-gray-300", "text-gray-500");
  element.classList.add("border-[#6576FF]", "text-[#816BFF]");

  console.log("Selected Size:", size);
}

// adding card function
let quantity = 1;

function updateQuantity(change) {
  // Increment or decrement quantity
  quantity += change;

  // Prevent quantity from going below 1
  if (quantity < 1) {
    quantity = 1;
  }

  // Update the quantity input value
  document.getElementById("quantity").value = quantity;
}

function addToWishlist() {
  // Log Wishlist action
  console.log("Added to Wishlist");
  alert("Item added to your Wishlist!");
}
