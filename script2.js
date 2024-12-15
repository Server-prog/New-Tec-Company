let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalItems;
    document.querySelector('.carousel-track').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Mover o carrossel automaticamente a cada 3 segundos
setInterval(moveCarousel, 3000);
