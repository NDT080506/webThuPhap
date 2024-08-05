const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let interval = null;


document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        interval = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function previousSlide() {
    clearInterval(interval);
    slideIndex--;
    showSlide(slideIndex);
}



