const sendBtn = document.querySelector("#sendBtn");
const ratingsContainer = document.querySelector(".ratings");
const ratingElements = document.querySelectorAll(".rating");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", handleRatingSelection);
sendBtn.addEventListener("click", handleRatingSubmission);

function handleRatingSelection(event) {
	const { target } = event;

	removeRatingSelections();

	if (target.parentNode.classList.contains("rating") && target.nextElementSibling) {
		target.parentNode.classList.add("active");
		selectedRating = target.nextElementSibling.textContent;
	} else if (
		target.parentNode.classList.contains("rating") &&
		target.previousElementSibling &&
		target.previousElementSibling.nodeName === "IMG"
	) {
		target.parentNode.classList.add("active");
		selectedRating = target.textContent;
	} else if (target.classList.contains("rating")) {
		target.classList.add("active");
		selectedRating = target.lastElementChild.textContent;
	}
}

function removeRatingSelections() {
	for (element of ratingElements) {
		element.classList.remove("active");
	}
}

function handleRatingSubmission() {
	const panel = document.querySelector(".panel");

	panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
}
