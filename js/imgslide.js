//record last sliderid when click modal
let lastslider;
const currentIndexes = {
    slider1: 0,
    slider2: 0,
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

/*function updateActiveBox(sliderId, index) {
    const activeBox = document.getElementById(`activeBox${sliderId.charAt(0).toUpperCase() + sliderId.slice(1)}`);
    activeBox.style.left = `${index * 65}px`; // Adjust for margin
}*/

function currentSlide(sliderId, index) {
    //stopAutoSlide(); // Stop the interval
    showSlide(sliderId, index);
    //startAutoSlide(); // Restart the interval
}

/*function openModal(sliderId, index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    lastslider=sliderId;
    currentIndexes[sliderId] = index; // Set current index for the opened slider
    updateModalImage(sliderId); // Update the modal image
    modal.style.display = 'flex';
    lenis.stop();
    stopAutoSlide();
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    lenis.start();
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

function addSwipeListeners(modal) {
    modal.addEventListener('touchstart', handleTouchStart, false);
    modal.addEventListener('touchmove', handleTouchMove, false);
}

function removeSwipeListeners() {
    const modal = document.getElementById('modal');
    modal.removeEventListener('touchstart', handleTouchStart);
    modal.removeEventListener('touchmove', handleTouchMove);
}

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0]; // Get the first touch point
    touchStartX = firstTouch.clientX;
    touchStartY = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!touchStartX || !touchStartY) {
        return; // If we don't have a starting point, exit
    }

    const currentTouch = evt.touches[0];
    const diffX = touchStartX - currentTouch.clientX;
    const diffY = touchStartY - currentTouch.clientY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        if (diffX > 0) {
            navigateModal(1); // Swipe left to next image
        } else {
            navigateModal(-1); // Swipe right to previous image
        }
    } else {
        // Vertical swipe
        if (diffY > 0) {
            closeModal(); // Swipe up to close modal
        }
    }

    // Reset touch points
    touchStartX = null;
    touchStartY = null;
}*/
/*<div class="slider" id="slider2">
                <div class="sliderimgcontainer">
                    <button class="arrow arrow-left" onclick="showSlide('slider2', currentIndexes['slider2'] - 1)">&#10094;</button>
                    <div class="slides">
                        <div class="slide" onclick="openModal('slider2', 0)"><img src="../images/Drawings_Thumbnail.jpg" alt="Image 4"></div>
                        <div class="slide" onclick="openModal('slider2', 1)"><img src="../images/Drawings_Thumbnail.jpg" alt="Image 5"></div>
                        <div class="slide" onclick="openModal('slider2', 2)"><img src="../images/Drawings_Thumbnail.jpg" alt="Image 6"></div>
                    </div>
                    <button class="arrow arrow-right" onclick="showSlide('slider2', currentIndexes['slider2'] + 1)">&#10095;</button>
                </div>
                <div class="thumbnails">
                    <img class="thumbnail active" src="../images/Drawings_Thumbnail.jpg" alt="Thumbnail 4" onclick="currentSlide('slider2', 0)">
                    <img class="thumbnail" src="../images/Drawings_Thumbnail.jpg" alt="Thumbnail 5" onclick="currentSlide('slider2', 1)">
                    <img class="thumbnail" src="../images/Drawings_Thumbnail.jpg" alt="Thumbnail 6" onclick="currentSlide('slider2', 2)">
                </div>
                <div class="margin-bottom-24px"></div>
                <div class="hero-wrapper-two">
                    <h2>Illustration</h2>
                    <!--<p class="margin-bottom-24px">Feature Not Yet Enabled</p>-->
                </div>
                <div>
                    <h3>Price</h3>
                    <div class="margin-bottom-24px"></div>
                    <ul>
                        <li><p class="margin-bottom-24px">IDK</p></li>
                        <li><p class="margin-bottom-24px">IDK</p></li>
                    </ul>
                </div>
                
            </div>*/

// Start auto slide on page load
startAutoSlide();