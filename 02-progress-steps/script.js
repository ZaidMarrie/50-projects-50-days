const progressBar = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const stepCircles = document.querySelectorAll(".circle");

let currentStep = 1;

function moveStepForward() {
	currentStep++;

	if (currentStep > stepCircles.length) {
		currentStep = stepCircles.length;
	}
	updateProgressDisplay();
}

function moveStepBackward() {
	currentStep--;

	if (currentStep < 1) {
		currentStep = 1;
	}
	updateProgressDisplay();
}

function updateProgressDisplay() {
	stepCircles.forEach((circle, index) => {
		if (currentStep >= index + 1) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	if (currentStep === 1) {
		prevButton.disabled = true;
	} else if (currentStep === stepCircles.length) {
		nextButton.disabled = true;
	} else {
		prevButton.disabled = false;
		nextButton.disabled = false;
	}

	// Calculates the value for progressBar "scaleX()" in css
	const progressAmount = (currentStep - 1) / (stepCircles.length - 1);
	progressBar.style.setProperty("--scale-amount", progressAmount);
}

prevButton.addEventListener("click", moveStepBackward);
nextButton.addEventListener("click", moveStepForward);
