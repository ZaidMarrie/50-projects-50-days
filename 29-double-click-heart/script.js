const imageContainer = document.querySelector(".loveme");
const likeCountEl = document.querySelector("#times");

let likeCount = 0;

imageContainer.addEventListener("dblclick", handleDoubleClick);

function handleDoubleClick(event) {
	const {
		clientX,
		clientY,
		target: { offsetTop, offsetLeft },
	} = event;

	const posX = clientX - offsetLeft;
	const posY = clientY - offsetTop;

	displayHeartAnimation(posX, posY);
	likeCountEl.textContent = ++likeCount;
}

function displayHeartAnimation(posX, posY) {
	const heartEl = document.createElement("i");
	heartEl.className = "fas fa-heart";
	heartEl.style.left = posX + "px";
	heartEl.style.top = posY + "px";

	imageContainer.appendChild(heartEl);

	setTimeout(() => heartEl.remove(), 800);
}
