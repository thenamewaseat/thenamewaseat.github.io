//record last sliderid when click modal
let lastslider;
const currentIndexes = {
    slider1: 0,
    slider2: 0,
    sliderCA: 0,
    slider3: 0
};
const images = {
    slider1: [
        "../images/app_icon.png",
        "../images/app_icon.png",
        "../images/app_icon.png"
    ],
    slider2: [
        "../images/Drawings_Thumbnail.jpg",
        "../images/Drawings_Thumbnail.jpg",
        "../images/Drawings_Thumbnail.jpg"
    ],
    sliderCA: [
        "../images/Drawings_Thumbnail.jpg",
        "../images/Drawings_Thumbnail.jpg",
        "../images/Drawings_Thumbnail.jpg"
    ],
    slider3: [
        "../images/Drawings_Thumbnail.jpg",
        "../images/Drawings_Thumbnail.jpg",
        "../images/Drawings_Thumbnail.jpg"
    ]
};

let autoSlideInterval;
let touchStartX = 0;
let touchStartY = 0;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        Object.keys(currentIndexes).forEach(sliderId => {
            showSlide(sliderId, currentIndexes[sliderId] + 1);
        });
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function showSlide(sliderId, index) {
    stopAutoSlide();
    const slides = document.querySelector(`#${sliderId} .slides`);
    const totalSlides = document.querySelectorAll(`#${sliderId} .slide`).length;
    currentIndexes[sliderId] = (index + totalSlides) % totalSlides; // Loop around
    const offset = -currentIndexes[sliderId] * 100; // Calculate offset
    slides.style.transform = `translateX(${offset}%)`;

    // Update active thumbnail
    const thumbnails = document.querySelectorAll(`#${sliderId} .thumbnail`);
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.remove('active');
        if (i === currentIndexes[sliderId]) {
            thumbnail.classList.add('active');
            //updateActiveBox(sliderId, i);
        }
    });
    startAutoSlide();
}


function currentSlide(sliderId, index) {
    //stopAutoSlide(); // Stop the interval
    showSlide(sliderId, index);
    //startAutoSlide(); // Restart the interval
}


startAutoSlide();