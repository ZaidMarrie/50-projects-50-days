const navToggleButton = document.getElementById("navToggle");

navToggleButton.addEventListener("click", (event) => {
	document.getElementById("nav").classList.toggle("active");
});
