const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (header) {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const servico = String(data.get("servico") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    if (!nome || !servico || !mensagem) {
      formNote.textContent = "Preencha nome, serviço e mensagem para preparar o e-mail.";
      return;
    }

    const subject = encodeURIComponent(`Orçamento - ${servico}`);
    const body = encodeURIComponent(
      [
        `Nome: ${nome}`,
        empresa ? `Empresa/condomínio: ${empresa}` : "Empresa/condomínio: não informado",
        `Serviço: ${servico}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
    );

    formNote.textContent = "Preparando a mensagem no seu aplicativo de e-mail...";
    window.location.href = `mailto:SAC@INSTALMEC.COM.BR?subject=${subject}&body=${body}`;
  });
}
