// SCROLL SUAVE PARA LINKS INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ANIMAÇÃO AO ROLAR A PÁGINA
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.section, .service-card, .cta').forEach(el => {
  observer.observe(el);
});

// FEEDBACK DO FORMULÁRIO 
(function () {
  emailjs.init("SUA_PUBLIC_KEY_AQUI");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.innerText = "Enviando mensagem...";

  emailjs
    .sendForm(
      "SEU_SERVICE_ID_AQUI",
      "SEU_TEMPLATE_ID_AQUI",
      this
    )
    .then(
      function () {
        status.innerText = "Mensagem enviada com sucesso! 🚀";
        form.reset();
      },
      function (error) {
        status.innerText = "Erro ao enviar. Tente novamente.";
        console.error("Erro:", error);
      }
    );
});

