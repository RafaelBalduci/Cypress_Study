document.addEventListener("DOMContentLoaded", function () {
  const loginPopup = document.getElementById("loginPopup");
  const closePopup = document.getElementById("closePopup");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  // Show login popup
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    loginPopup.style.display = "flex";
  });

  // Close login popup
  closePopup.addEventListener("click", function () {
    loginPopup.style.display = "none";
    loginMessage.textContent = "";
  });

  // Handle login form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform login validation (you can replace this with your own logic)
    if (username === "user" && password === "pass") {
      loginMessage.textContent = "Login successful!";
    } else {
      loginMessage.textContent = "Login failed. Please try again.";
    }
  });

  // Implement other functionality for profile, store, and cart pages
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Item added to cart!"); // Replace this with your cart logic
    });
  });
});
