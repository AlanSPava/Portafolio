const hamburguesa = document.querySelector('#hamburger')
const enlaces = document.querySelector('#nav-links')

hamburguesa.addEventListener('click', () => {
    enlaces.classList.toggle('show')
})

// Animación de las barras de habilidades
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');
let animated = false;

window.addEventListener('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if(sectionPos < screenPos - 100 && !animated) {
    progressBars.forEach(bar => {
      if(bar.classList.contains('html')) bar.style.width = "70%";
      if(bar.classList.contains('css')) bar.style.width = "60%";
      if(bar.classList.contains('js')) bar.style.width = "50%";
      if(bar.classList.contains('frameworks')) bar.style.width = "45%";
    });
    animated = true; // solo se ejecuta una vez
  }
});

// Validación y envío del formulario de contacto
const contactForm = document.querySelector("#contact-form");
const statusMsg = document.querySelector("#form-status");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtener valores
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Validación básica
  if (!name || !email || !message) {
    statusMsg.textContent = "Por favor completa todos los campos.";
    statusMsg.style.color = "red";
    return;
  }

  // Validación de email simple
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    statusMsg.textContent = "Por favor ingresa un correo válido.";
    statusMsg.style.color = "red";
    return;
  }

  // Simulación de envío (aquí podrías integrar EmailJS, Formspree, etc.)
  statusMsg.textContent = "¡Mensaje enviado con éxito!";
  statusMsg.style.color = "green";

  // Limpiar campos
  contactForm.reset();
});
