//record last sliderid when click modal
let lastslider;
const currentIndexes = {
    slider1: 0,
    slider2: 0
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
    ]
};

let autoSlideInterval;

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

/*function updateActiveBox(sliderId, index) {
    const activeBox = document.getElementById(`activeBox${sliderId.charAt(0).toUpperCase() + sliderId.slice(1)}`);
    activeBox.style.left = `${index * 65}px`; // Adjust for margin
}*/

function currentSlide(sliderId, index) {
    //stopAutoSlide(); // Stop the interval
    showSlide(sliderId, index);
    //startAutoSlide(); // Restart the interval
}

function openModal(sliderId, index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    lastslider=sliderId;
    currentIndexes[sliderId] = index; // Set current index for the opened slider
    updateModalImage(sliderId); // Update the modal image
    modal.style.display = 'flex';
    stopAutoSlide();
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    startAutoSlide();
}

function navigateModal(direction) {
    //const activeSliderId = Object.keys(currentIndexes).find(lastsliderId => currentIndexes[lastsliderId] >= 0);
    const totalImages = images[lastslider].length;
    currentIndexes[lastslider] = (currentIndexes[lastslider] + direction + totalImages) % totalImages; // Wrap around
    updateModalImage(lastslider); // Update the image in the modal
}

function updateModalImage(sliderId) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[sliderId][currentIndexes[sliderId]]; // Load the actual image
}

// Start auto slide on page load
startAutoSlide();