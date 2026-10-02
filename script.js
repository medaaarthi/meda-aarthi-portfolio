const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeToggle.innerHTML = dark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    projectItems.forEach(item => {
      item.classList.toggle("d-none", filter !== "all" && item.dataset.category !== filter);
    });
  });
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", event => {
  event.preventDefault();
  form.classList.add("was-validated");

  if (!form.checkValidity()) {
    formMessage.innerHTML = '<div class="alert alert-danger" role="alert">Please correct the highlighted fields.</div>';
    return;
  }

  const name = document.getElementById("name").value.trim();
  formMessage.innerHTML = `<div class="alert alert-success" role="alert">Thank you, ${name}. Your message has been validated successfully. A backend/email service is not connected in this static assignment.</div>`;
  form.reset();
  form.classList.remove("was-validated");
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
