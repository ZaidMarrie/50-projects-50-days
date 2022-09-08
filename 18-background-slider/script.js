const bodyEl = document.body;
const slideElements = document.querySelectorAll(".slide");
const leftButton = document.getElementById("arrowLeft");
const rightButton = document.getElementById("arrowRight");

let activeSlideIndex = 0;

rightButton.addEventListener("click", cycleSlidesForwards);
leftButton.addEventListener("click", cycleSlidesBackwards);

function setBodyBackground() {
	const activeSlideImage = slideElements[activeSlideIndex].style.backgroundImage;
	bodyEl.style.backgroundImage = activeSlideImage;
}

setBodyBackground();

function toggleActiveSlide() {
	slideElements.forEach((slideEl) => {
		slideEl.classList.remove("active");
	});

	slideElements[activeSlideIndex].classList.add("active");
}

function cycleSlidesForwards() {
	activeSlideIndex++;

	if (activeSlideIndex > slideElements.length - 1) activeSlideIndex = 0;

	setBodyBackground();
	toggleActiveSlide();
}

function cycleSlidesBackwards() {
	activeSlideIndex--;

	if (activeSlideIndex < 0) activeSlideIndex = slideElements.length - 1;

	setBodyBackground();
	toggleActiveSlide();
}
