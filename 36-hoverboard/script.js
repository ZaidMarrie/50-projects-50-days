const containerEl = document.getElementById("container");
const SQUARES = 506;

for (let i = 0; i < SQUARES; i++) {
	const squareEl = document.createElement("div");
	squareEl.classList.add("square");

	squareEl.addEventListener("mouseover", () => setColor(squareEl));
	squareEl.addEventListener("mouseout", () => removeColor(squareEl));

	containerEl.appendChild(squareEl);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = "#1d1d1d";
	element.style.boxShadow = "0 0 2px #000000";
}

function getRandomColor() {
	const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
	return colors[Math.floor(Math.random() * colors.length)];
}
