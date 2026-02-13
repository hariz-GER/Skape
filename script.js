const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const projectCards = [...document.querySelectorAll(".project-card")];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.style.display = match ? "block" : "none";
    });
  });
});

const openLightbox = (imgSrc, altText) => {
  lightboxImage.src = imgSrc;
  lightboxImage.alt = altText;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

projectCards.forEach((card) => {
  const img = card.querySelector("img");
  card.addEventListener("click", () => openLightbox(img.src, img.alt));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(img.src, img.alt);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const statusText = document.getElementById("formStatus");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const showError = (id, message) => {
  document.getElementById(id).textContent = message;
};

const clearErrors = () => {
  showError("nameError", "");
  showError("emailError", "");
  showError("messageError", "");
  statusText.textContent = "";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let valid = true;

  if (nameInput.value.trim().length < 2) {
    showError("nameError", "Please enter your full name.");
    valid = false;
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    showError("emailError", "Please enter a valid email address.");
    valid = false;
  }

  if (messageInput.value.trim().length < 10) {
    showError("messageError", "Please provide at least 10 characters.");
    valid = false;
  }

  if (!valid) return;

  statusText.textContent = "Thank you. Your message has been sent successfully.";
  form.reset();
});

const revealElements = [...document.querySelectorAll(".reveal")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback for older Safari: show elements without scroll observer.
  revealElements.forEach((el) => el.classList.add("in-view"));
}

document.getElementById("year").textContent = new Date().getFullYear();
