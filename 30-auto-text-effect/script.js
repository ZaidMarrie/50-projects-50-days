const textEl = document.getElementById("text");
const speedInput = document.getElementById("speed");
const text = "Hi, My name is Zaid Marrie!";

let typeSpeed = 300 / speedInput.value;
let textIndex = 1;

animateText();

function animateText() {
	textEl.textContent = text.slice(0, textIndex);
	textIndex++;

	if (textIndex > text.length) textIndex = 1;

	setTimeout(animateText, typeSpeed);
}

speedInput.addEventListener("change", (event) => {
	typeSpeed = 300 / event.target.value;
});
