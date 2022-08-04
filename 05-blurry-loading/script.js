const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

const loadTotal = 100;
let loadStart, previousTimeStamp;
let loadingCompleted = false;

/*
 * window.requestAnimationFrame - MDN
 * https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#examples
 */
function blur(timestamp) {
	if (!loadStart) {
		loadStart = timestamp;
	}

	const elapsed = timestamp - loadStart;

	if (timestamp !== previousTimeStamp) {
		const count = Math.min(0.1 * elapsed, loadTotal);
		let blurAmount = loadTotal - count;
		loadingText.textContent = `${count.toFixed(0)}%`;
		bg.style.setProperty("--blur-amount", `blur(${blurAmount}px)`);
		loadingText.style.opacity = scale(blurAmount, 0, 100, 0, 1);

		if (count === 100) {
			loadingCompleted = true;
		}
	}

	if (elapsed < 5000) {
		previousTimeStamp = timestamp;

		if (!loadingCompleted) {
			requestAnimationFrame(blur);
		}
	}
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, in_min, in_max, out_min, out_max) {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

window.requestAnimationFrame(blur);
