const toastsEl = document.getElementById("toasts");
const toastBtn = document.getElementById("toastBtn");

const toastTypes = ["danger", "warning", "info", "success"];
const messages = ["Message One", "Message Two", "Message Three", "Message Four"];

toastBtn.addEventListener("click", () => showNotification(randomItem(toastTypes)));

function showNotification(type) {
	const toastEl = document.createElement("div");
	toastEl.classList.add("toast");
	toastEl.classList.add(type);
	toastEl.textContent = randomItem(messages);
	toastsEl.appendChild(toastEl);

	setTimeout(() => {
		toastEl.remove();
	}, 3000);
}

function randInt(min = 0, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomItem(arr) {
	return arr[randInt(0, arr.length - 1)];
}
