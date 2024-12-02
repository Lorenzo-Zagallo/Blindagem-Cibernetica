// seleciona elementos do DOM
const newsSlides = document.querySelector('.news-slides');
const newsItems = document.querySelectorAll('.news-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalItems = newsItems.length;

// função para atualizar a posição do carrossel
function updateCarouselPosition() {
  const slideWidth = newsItems[currentIndex].clientWidth;
  newsSlides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// função para mover para a próxima notícia
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarouselPosition();
}

// função para mover para a notícia anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarouselPosition();
}

// adiciona eventos aos botões
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// carrossel automático (opcional)
setInterval(nextSlide, 5000); // alterna as notícias a cada 5 segundos