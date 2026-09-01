'use strict';


/* =========================
   Main Visual Slider
========================= */

const slides = document.querySelectorAll('.visual-slide');
const prevButton = document.querySelector('.visual-prev');
const nextButton = document.querySelector('.visual-next');
const currentSlide = document.querySelector('.current-slide');
const progress = document.querySelector('.indicator-progress');

let currentIndex = 0;
let slideTimer;

const slideDuration = 5000;


const showSlide = (index) => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');

    currentSlide.textContent =
        String(index + 1).padStart(2, '0');

    progress.style.width =
        `${((index + 1) / slides.length) * 100}%`;
};


const nextSlide = () => {

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
};


const prevSlide = () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
};


const startSlide = () => {

    slideTimer = setInterval(() => {
        nextSlide();
    }, slideDuration);
};


const resetSlideTimer = () => {

    clearInterval(slideTimer);

    startSlide();
};


nextButton.addEventListener('click', () => {
    nextSlide();
    resetSlideTimer();
});


prevButton.addEventListener('click', () => {
    prevSlide();
    resetSlideTimer();
});


showSlide(currentIndex);
startSlide();


/* =========================
   Search
========================= */

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#site-search');


searchForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const keyword = searchInput.value.trim();

    if (!keyword) {
        searchInput.focus();
        return;
    }

    alert(`"${keyword}" 검색 기능은 추후 연결됩니다.`);
});


/* =========================
   Product Slider
========================= */

const productSlides =
    document.querySelectorAll('.product-slide');

const productDots =
    document.querySelectorAll('.product-dot');

const productPrev =
    document.querySelector('.product-prev');

const productNext =
    document.querySelector('.product-next');

let productIndex = 0;


const showProduct = (index) => {

    productSlides.forEach((slide) => {
        slide.classList.remove('active');
    });

    productDots.forEach((dot) => {
        dot.classList.remove('active');
    });

    productSlides[index].classList.add('active');
    productDots[index].classList.add('active');

    productIndex = index;
};


productNext.addEventListener('click', () => {

    let nextIndex = productIndex + 1;

    if (nextIndex >= productSlides.length) {
        nextIndex = 0;
    }

    showProduct(nextIndex);
});


productPrev.addEventListener('click', () => {

    let prevIndex = productIndex - 1;

    if (prevIndex < 0) {
        prevIndex = productSlides.length - 1;
    }

    showProduct(prevIndex);
});


productDots.forEach((dot, index) => {

    dot.addEventListener('click', () => {
        showProduct(index);
    });

});
/* =========================
   Site Notice Popup
========================= */

const sitePopup =
    document.querySelector('#sitePopup');

const sitePopupClose =
    document.querySelector('#sitePopupClose');

const sitePopupConfirm =
    document.querySelector('#sitePopupConfirm');

const popupToday =
    document.querySelector('#popupToday');


function closeSitePopup() {

    sitePopup.classList.add('hidden');

    if (popupToday.checked) {
        localStorage.setItem(
            'archonPopupHidden',
            'true'
        );
    }

}


if (
    localStorage.getItem('archonPopupHidden') === 'true'
) {

    sitePopup.classList.add('hidden');

}


sitePopupClose.addEventListener(
    'click',
    closeSitePopup
);


sitePopupConfirm.addEventListener(
    'click',
    closeSitePopup
);


showProduct(0);