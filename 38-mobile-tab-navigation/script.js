const tabContents = document.querySelectorAll(".content");
const tabButtons = document.querySelectorAll("nav li");

tabButtons.forEach((button, idx) => {
	button.addEventListener("click", () => {
		hideAllTabContents();
		hideAllButtons();

		button.classList.add("active");
		tabContents[idx].classList.add("show");
	});
});

function hideAllTabContents() {
	tabContents.forEach((contentImg) => contentImg.classList.remove("show"));
}

function hideAllButtons() {
	tabButtons.forEach((button) => button.classList.remove("active"));
}
