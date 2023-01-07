let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

window.addEventListener("resize", () => {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
});

// DOM Elements
const screens = document.querySelectorAll(".screen");
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn");
const playBtn = document.getElementById("startBtn");
const gameContainer = document.getElementById("gameContainer");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

// Game statistics being tracked
let seconds = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener("click", (event) => {
	screens[0].classList.add("up");
});

chooseInsectBtns.forEach((insectBtn) => {
	insectBtn.addEventListener("click", (event) => {
		const image = insectBtn.querySelector("img");
		const imageSrc = image.src;
		const imageAlt = image.src;

		selectedInsect = { imageSrc, imageAlt };
		screens[1].classList.add("up");
		setTimeout(createInsect, 1000);
		startGame();
	});
});

function startGame() {
	setInterval(increaseTime, 1000);
}

function getRandomLocation() {
	const x = Math.floor(Math.random() * (windowWidth - 200) + 100);
	const y = Math.floor(Math.random() * (windowWidth - 200) + 100);

	return { posX: `${x}px`, posY: `${y}px` };
}

function createInsect() {
	const insectEl = document.createElement("div");
	insectEl.classList.add("insect");
	const { posX, posY } = getRandomLocation();

	// Create insect image
	const insectImgEl = document.createElement("img");
	const { imageSrc, imageAlt } = selectedInsect;
	insectImgEl.src = imageSrc;
	insectImgEl.alt = imageAlt;

	insectEl.appendChild(insectImgEl);
	insectEl.addEventListener("click", catchInsect);

	// Add image to game board at random location with random rotation
	insectEl.style.left = posX;
	insectEl.style.top = posY;
	insectEl.style.transform = `rotate(${Math.floor(Math.random() * 360)})`;
	gameContainer.appendChild(insectEl);
}

function increaseTime() {
	let m = Math.floor(seconds / 60);
	let s = seconds % 60;

	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	timeEl.textContent = `Time: ${m}:${s}`;
	seconds++;
}

function increaseScore() {
	score++;
	scoreEl.textContent = `Score: ${score}`;

	if (score > 30) {
		messageEl.classList.add("visible");
		setTimeout(() => {
			messageEl.classList.remove("visible");
		}, 10000);
	}
}

function catchInsect(event) {
	this.classList.add("caught");
	increaseScore();

	setTimeout(() => {
		this.remove();
	}, 2000);

	addInsects();
}

function addInsects() {
	setTimeout(createInsect, 1000);
	setTimeout(createInsect, 1500);
}
