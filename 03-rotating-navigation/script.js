const openButton = document.getElementById("openBtn");
const closeButton = document.getElementById("closeBtn");
const container = document.querySelector(".container");

openButton.addEventListener("click", () => container.classList.add("show-nav"));

closeButton.addEventListener("click", () =>
	container.classList.remove("show-nav")
);
