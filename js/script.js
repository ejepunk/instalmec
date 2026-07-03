const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("#site-menu");
const year = document.querySelector("[data-year]");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menu?.classList.toggle("is-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

if (year) {
  year.textContent = new Date().getFullYear();
}

const modal = document.querySelector("[data-modal]");
const modalImage = modal?.querySelector("[data-modal-image]");
const modalTitle = modal?.querySelector("[data-modal-title]");
const modalText = modal?.querySelector("[data-modal-text]");
const modalClose = modal?.querySelector("[data-modal-close]");
const serviceCards = document.querySelectorAll(".service-card");
let lastFocused = null;

const openModal = (card) => {
  const img = card.querySelector("img");
  const title = card.querySelector("h3");
  if (!modal || !img || !title) return;
  modalImage.src = img.src;
  modalImage.alt = title.textContent ?? "";
  modalTitle.textContent = title.textContent ?? "";
  modalText.textContent = card.dataset.detail ?? "";
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalClose?.focus();
};

const closeModal = () => {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocused instanceof HTMLElement) {
    lastFocused.focus();
  }
};

serviceCards.forEach((card) => {
  card.addEventListener("click", () => openModal(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card);
    }
  });
});

modalClose?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.hidden) {
    closeModal();
  }
});
