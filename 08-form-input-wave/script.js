const formLabels = document.querySelectorAll(".form__label");

formLabels.forEach((label) => {
	const labelText = label.textContent;

	label.textContent = "";

	labelText.split("").map((letter, index) => {
		const letterSpan = document.createElement("span");
		const transitionDelay = index * 70;

		letterSpan.textContent = letter;
		letterSpan.style.transitionDelay = `${transitionDelay}ms`;
		label.appendChild(letterSpan);
	});
});
