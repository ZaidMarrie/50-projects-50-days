const container = document.querySelector(".container");
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement("img");
	img.src = `https://unsplash.it/${randInt()}/${randInt()}`;

	container.appendChild(img);
}

function randInt() {
	return Math.floor(Math.random() * 10) + 300;
}
