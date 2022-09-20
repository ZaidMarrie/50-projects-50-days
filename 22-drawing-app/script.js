const sizeEl = document.getElementById("size");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const colorInput = document.getElementById("colorInput");
const resetBtn = document.getElementById("reset");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x, y;
let isPressed = false;
let size = 20;
let color = "steelblue";

canvas.addEventListener("mousedown", (event) => {
	isPressed = true;
	x = event.offsetX;
	y = event.offsetY;
});

canvas.addEventListener("mouseup", (event) => {
	isPressed = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
	if (isPressed) {
		x2 = event.offsetX;
		y2 = event.offsetY;

		drawCircle(x, y);
		drawLines(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

decreaseBtn.addEventListener("click", (event) => {
	size -= 5;
	if (size < 5) size = 5;

	updateSizeEl();
});

increaseBtn.addEventListener("click", (event) => {
	size += 5;
	if (size > 50) size = 50;

	updateSizeEl();
});

resetBtn.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));

colorInput.addEventListener("change", (event) => (color = event.target.value));

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size / 2, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLines(posX, posY, lineX, lineY) {
	ctx.beginPath();
	ctx.moveTo(posX, posY);
	ctx.lineTo(lineX, lineY);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
}

function updateSizeEl() {
	sizeEl.textContent = size;
}
