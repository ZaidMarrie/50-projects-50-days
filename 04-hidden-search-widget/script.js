const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", (event) => {
	searchInput.classList.toggle("active");
	searchInput.focus();
});
