document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('hidden');
            } else {
                slide.classList.add('hidden');
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    const intervalId = setInterval(nextSlide, 3000);

    document.getElementById('nextBtn').addEventListener('click', () => {
        clearInterval(intervalId);
        nextSlide();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        clearInterval(intervalId);
        prevSlide();
    });
});