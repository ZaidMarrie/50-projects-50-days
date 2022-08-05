const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
	const triggerPoint = window.innerHeight;

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < (triggerPoint / 2) * 1.7) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}

checkBoxes();
