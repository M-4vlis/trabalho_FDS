// Slideshow automático
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000); // Troca a cada 3 segundos

// Animação Fade In ao rolar a página
const fadeElements = document.querySelectorAll('p, .hobbies, .tabela');

function fadeInOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('fade-in');
    }
  });
}

// Botão de boas vindas
document.querySelector('.welcome-button').addEventListener('click', function() {
  const messageDiv = document.getElementById('welcome-message');
  messageDiv.textContent = 'Seja muito bem-vindo(a) à minha página! 😊';
  messageDiv.classList.add('show');
});

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
