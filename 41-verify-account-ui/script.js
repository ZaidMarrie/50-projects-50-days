const codeInputs = document.querySelectorAll(".code");

codeInputs[0].focus();

codeInputs.forEach((input, index) => {
	input.addEventListener("keydown", (event) => {
		if (event.key >= 0 && event.key <= 9) {
			codeInputs[index].value = "";

			if (index + 1 === codeInputs.length) return;

			setTimeout(() => codeInputs[index + 1].focus(), 10);
		} else if (event.key === "Backspace" && index > 0) {
			setTimeout(() => codeInputs[index - 1].focus(), 10);
		}
	});
});
