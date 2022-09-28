const slidesContainer = document.querySelector(".slider-container");
const slidesLeft = document.querySelector(".slide-left");
const slidesRight = document.querySelector(".slide-right");
const upBtn = document.querySelector(".btn-up");
const downBtn = document.querySelector(".btn-down");
const slidesLength = slidesRight.querySelectorAll("div").length;

let currentSlideIndex = 0;

slidesLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
	const sliderHeight = slidesContainer.clientHeight;

	if (direction === "up") {
		currentSlideIndex++;
		if (currentSlideIndex > slidesLength - 1) currentSlideIndex = 0;
	} else {
		currentSlideIndex--;
		if (currentSlideIndex < 0) currentSlideIndex = slidesLength - 1;
	}

	slidesLeft.style.transform = `translateY(${sliderHeight * currentSlideIndex}px)`;
	slidesRight.style.transform = `translateY(-${sliderHeight * currentSlideIndex}px)`;
}
