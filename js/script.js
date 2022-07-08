window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const openBacket = document.querySelector(".open"),
    products = document.querySelectorAll(".product"),
    btns = document.querySelectorAll(".product button");
  // show backet
  function showBacket() {
    const cart = document.createElement("div"),
      heading = document.createElement("h2"),
      filed = document.createElement("div"),
      closeBtn = document.createElement("button");

    cart.classList.add("cart");
    filed.classList.add("cart-field");
    closeBtn.classList.add("close");
    heading.textContent = "Hello world";
    closeBtn.textContent = "Close Backet";

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(filed);
    cart.appendChild(closeBtn);
  }
  showBacket();
  const cart = document.querySelector(".cart"),
    filed = document.querySelector(".cart-field "),
    closeBtn = document.querySelector(".close");

  openBacket.addEventListener("click", () => {
    cart.classList.add("show");
    cart.classList.remove("hidden");
  });
  closeBtn.addEventListener("click", () => {
    cart.classList.add("hidden");
    cart.classList.remove("show");
  });
  window.addEventListener("click", (e) => {
    if (e.target === cart) {
      cart.classList.remove("show");
    }
  });

  btns.forEach((item, index) => {
    item.addEventListener("click", () => {
      const cloneItem = products[index].cloneNode(true),
        btn = cloneItem.querySelector("button");

      btn.remove();
      filed.appendChild(cloneItem);
      // item.textContent = "Svatga qo'shildi";
      products[i].remove();
    });
  });
});
