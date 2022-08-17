const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", (event) => {
	left.classList.add("active");
});

left.addEventListener("mouseleave", (event) => {
	left.classList.remove("active");
});

right.addEventListener("mouseenter", (event) => {
	right.classList.add("active");
});

right.addEventListener("mouseleave", (event) => {
	right.classList.remove("active");
});
