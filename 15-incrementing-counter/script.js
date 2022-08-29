const counterElements = document.querySelectorAll(".stats__counter");

counterElements.forEach((counterElement) => {
	counterElement.textContent = "0";

	const updateCounter = () => {
		const target = Number(counterElement.getAttribute("data-target"));
		const c = Number(counterElement.textContent);

		const increment = target / 200;

		if (c < target) {
			counterElement.textContent = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
			counterElement.textContent = target;
		}
	};

	updateCounter();
});
