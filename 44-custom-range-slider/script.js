const rangeInput = document.getElementById("range");
const rangeLabel = document.getElementById("rangeLabel");

rangeSlider();
rangeInput.addEventListener("input", rangeSlider);

function rangeSlider(e) {
	const value = +rangeInput.value;

	const rangeWidth = getComputedStyle(rangeInput).getPropertyValue("width");
	const labelWidth = getComputedStyle(rangeLabel).getPropertyValue("width");

	const rangeWidthNum = +rangeWidth.slice(0, -2);
	const labelWidthNum = +labelWidth.slice(0, -2);

	positionLabel(value, rangeWidthNum, labelWidthNum);
}

function positionLabel(rangeValue, rangeWidth, labelWidth) {
	const max = +rangeInput.max;
	const min = +rangeInput.min;

	const leftValue =
		rangeValue * (rangeWidth / max) - labelWidth / 2 + scale(rangeValue, min, max, 10, -10);

	rangeLabel.textContent = rangeValue;
	rangeLabel.style.left = `${leftValue}px`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, in_min, in_max, out_min, out_max) {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
