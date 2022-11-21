const slidesContainer = document.getElementById("slides");
const slides = document.querySelectorAll(".carousel__img");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let slidesIndex = 0;

leftBtn.addEventListener("click", cycleImages);
rightBtn.addEventListener("click", cycleImages);

let slidesInterval = setInterval(cycleImages, 2000);

function cycleImages(event) {
	if (event) {
		const { id } = event.target;

		if (id === "left") {
			slidesIndex--;
		} else if (id === "right") {
			slidesIndex++;
		}

		resetSlidesInterval();
	} else {
		// Runs when interval calls cycleImages()
		slidesIndex++;
	}

	updateVisibleSlide(slidesIndex);
}

function updateVisibleSlide(index) {
	const slidesLength = slides.length - 1;

	if (index > slidesLength) {
		slidesIndex = 0;
	} else if (index < 0) {
		slidesIndex = slidesLength;
	}

	slidesContainer.style.transform = `translateX(${-slidesIndex * 500}px)`;
}

function resetSlidesInterval() {
	clearInterval(slidesInterval);
	slidesInterval = setInterval(cycleImages, 2000);
}
