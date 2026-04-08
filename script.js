const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const images = carousel.querySelector('.carousel-images');
    const slides = carousel.querySelectorAll('.carousel img');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    
    let index = 0;
    const totalSlides = slides.length;
    
    function updateCarousel() {
        const slideWidth = carousel.offsetWidth;
        images.style.transform = `translateX(${-index * slideWidth}px)`;
    }
    
    function goToSlide(n) {
        index = (n + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    next.addEventListener('click', () => {
        goToSlide(index + 1);
    });
    
    prev.addEventListener('click', () => {
        goToSlide(index - 1);
    });
    
    // Atualizar ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);
    
    // Inicializar
    updateCarousel();
});

