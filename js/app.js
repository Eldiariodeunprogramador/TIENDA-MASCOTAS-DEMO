/* Interacciones de demostración para Patitas Felices */
"use strict";

const money = new Intl.NumberFormat("es-CO", {
  style: "currency", currency: "COP", maximumFractionDigits: 0
});

const cart = [];
const cartCount = document.querySelector("#cart-count");
const cartSummary = document.querySelector("#cart-summary");
const cartTotal = document.querySelector("#cart-total");
const toast = document.querySelector("#toast");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderCart() {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCount.textContent = quantity;
  cartTotal.textContent = money.format(total);
  if (!cart.length) {
    cartSummary.textContent = "Aún no has agregado productos.";
    return;
  }
  cartSummary.textContent = cart.map(item => `${item.quantity} × ${item.name}`).join(" · ");
}

document.querySelectorAll(".quick-add").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const existing = cart.find(item => item.name === name);
    if (existing) existing.quantity += 1;
    else cart.push({ name, price, quantity: 1 });
    renderCart();
    showToast(`${name} se agregó al carrito 🐾`);
  });
});

document.querySelector("#clear-cart").addEventListener("click", () => {
  cart.length = 0;
  renderCart();
  showToast("Tu carrito está vacío.");
});

// Filtros de categorías de productos
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.classList.toggle("is-hidden", filter !== "todos" && card.dataset.category !== filter);
    });
  });
});

// Menú desplegable para pantallas pequeñas
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  menuToggle.textContent = "☰";
}));

// Slider/carrusel de testimonios
const testimonials = [
  { quote: "Desde que descubrí Patitas Felices, comprar para mi perrita es mucho más fácil. La atención es increíble y los productos le encantan.", name: "Camila R.", pet: "Mamá de Luna 🐕", avatar: "👩🏻" },
  { quote: "Encontré juguetes resistentes y un alimento que le cae muy bien a mi gato. Se nota el cariño con el que eligen cada producto.", name: "Andrés M.", pet: "Papá de Milo 🐈", avatar: "👨🏻" },
  { quote: "Me asesoraron con paciencia y pude elegir el arnés ideal para nuestros paseos. ¡Ahora Bruno no quiere volver a casa!", name: "Valentina P.", pet: "Mamá de Bruno 🐶", avatar: "👩🏽" }
];
document.querySelectorAll(".slider-dot").forEach(dot => {
  dot.addEventListener("click", () => {
    const item = testimonials[Number(dot.dataset.slide)];
    document.querySelector("blockquote").textContent = item.quote;
    document.querySelector(".reviewer strong").textContent = item.name;
    document.querySelector(".reviewer small").textContent = item.pet;
    document.querySelector(".review-avatar").textContent = item.avatar;
    document.querySelectorAll(".slider-dot").forEach(button => button.classList.toggle("active", button === dot));
  });
});

// Formularios de demostración: validan y muestran confirmación, no envían datos.
document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#nombre").value.trim();
  document.querySelector("#form-message").textContent = `¡Gracias, ${name}! Tu mensaje quedó validado en esta demostración.`;
  event.currentTarget.reset();
});
document.querySelector("#newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#newsletter-message").textContent = "¡Gracias por querer recibir nuestras novedades!";
  event.currentTarget.reset();
  window.setTimeout(() => { document.querySelector("#newsletter-message").textContent = ""; }, 4000);
});

renderCart();
