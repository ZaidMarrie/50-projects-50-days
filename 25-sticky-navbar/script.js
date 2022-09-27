const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
	const targetOffset = nav.offsetHeight + 100;

	if (window.scrollY > targetOffset) {
		nav.classList.add("active");
	} else {
		nav.classList.remove("active");
	}
}
