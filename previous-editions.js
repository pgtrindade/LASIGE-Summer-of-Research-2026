const previousProjectFiles = [
    "Images/previous-projects/5.jpg",
    "Images/previous-projects/2.jpg",
    "Images/previous-projects/6.jpg",
    "Images/previous-projects/7.jpg",
    "Images/previous-projects/8.jpg",
    "Images/previous-projects/9.jpg",
    "Images/previous-projects/10.jpg",
    "Images/previous-projects/11.jpg",
    "Images/previous-projects/14.jpg",
    "Images/previous-projects/15.jpg",

];

let currentSlideIndex = 0;
let carouselInterval = null;
let isCarouselHovered = false;
const autoSlideDelay = 4500;

function createSlideElement(file, index) {
    const extension = file.split(".").pop().toLowerCase();
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    if (index === 0) slide.classList.add("active");

    if (["jpg", "jpeg", "png", "webp", "gif"].includes(extension)) {
        const img = document.createElement("img");
        img.src = file;
        img.alt = "Previous year project file";
        img.draggable = false;
        slide.appendChild(img);
    } else if (extension === "pdf") {
        const iframe = document.createElement("iframe");
        iframe.src = file;
        iframe.title = "Previous year project PDF";
        iframe.setAttribute("tabindex", "-1");
        slide.appendChild(iframe);
    } else {
        const fallback = document.createElement("div");
        fallback.textContent = "Unsupported file type";
        fallback.style.padding = "2rem";
        slide.appendChild(fallback);
    }

    return slide;
}

function buildSlides() {
    const container = document.getElementById("previous-projects-container");
    if (!container) return;

    container.innerHTML = "";

    previousProjectFiles.forEach((file, index) => {
        container.appendChild(createSlideElement(file, index));
    });
}

function updateDots() {
    const dots = document.querySelectorAll(".carousel-dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlideIndex);
    });
}

function renderSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    if (!slides.length) return;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    updateDots();
}

function goToSlide(index) {
    currentSlideIndex = (index + previousProjectFiles.length) % previousProjectFiles.length;
    renderSlide(currentSlideIndex);
}

function nextSlide() {
    goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
    goToSlide(currentSlideIndex - 1);
}

function createDots() {
    const dotsContainer = document.getElementById("carousel-dots");
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";

    previousProjectFiles.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

        dot.addEventListener("click", (event) => {
            goToSlide(index);
            event.currentTarget.blur();

            if (!isCarouselHovered) {
                restartAutoSlide();
            }
        });

        dotsContainer.appendChild(dot);
    });
}

function startAutoSlide() {
    stopAutoSlide();
    carouselInterval = setInterval(nextSlide, autoSlideDelay);
}

function stopAutoSlide() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

function restartAutoSlide() {
    if (!isCarouselHovered) {
        startAutoSlide();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (previousProjectFiles.length === 0) return;

    buildSlides();
    createDots();
    renderSlide(currentSlideIndex);
    startAutoSlide();

    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");
    const carousel = document.getElementById("previous-projects-carousel");

    if (prevButton) {
        prevButton.addEventListener("click", (event) => {
            prevSlide();
            event.currentTarget.blur();

            if (!isCarouselHovered) {
                restartAutoSlide();
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", (event) => {
            nextSlide();
            event.currentTarget.blur();

            if (!isCarouselHovered) {
                restartAutoSlide();
            }
        });
    }

    if (carousel) {
        carousel.addEventListener("mouseenter", () => {
            isCarouselHovered = true;
            stopAutoSlide();
        });

        carousel.addEventListener("mouseleave", () => {
            isCarouselHovered = false;
            startAutoSlide();
        });
    }
});