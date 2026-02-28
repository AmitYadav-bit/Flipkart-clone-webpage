// ===== CART =====
let cartCount = 0;

function updateCartCount() {
  const badge = document.getElementById("cart-count");
  badge.textContent = cartCount;
  badge.style.display = cartCount > 0 ? "flex" : "none";
}

function addToCart(name) {
  cartCount++;
  updateCartCount();
  showToast(`"${name}" added to cart!`);
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ===== BANNER SLIDER =====
let currentSlide = 0;
const totalSlides = 4;
let slideInterval;

function goToSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 3500);
}

function stopSlider() {
  clearInterval(slideInterval);
}

// ===== SEARCH =====
function handleSearch() {
  const query = document.getElementById("search-input").value.trim();
  if (query) {
    showToast(`Searching for "${query}"...`);
  }
}

function handleSearchKey(e) {
  if (e.key === "Enter") handleSearch();
}

// ===== LOGIN MODAL =====
function toggleLoginModal() {
  const modal = document.getElementById("login-modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  if (email) {
    const btn = document.querySelector(".btn-login");
    btn.textContent = email.split("@")[0];
    showToast(`Welcome back, ${email.split("@")[0]}!`);
    toggleLoginModal();
  }
}

// ===== CATEGORY NAV ACTIVE =====
document.querySelectorAll(".category-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".category-item").forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// ===== INIT =====
window.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  goToSlide(0);
  startSlider();

  const slider = document.querySelector(".banner-slider");
  slider.addEventListener("mouseenter", stopSlider);
  slider.addEventListener("mouseleave", startSlider);
});
