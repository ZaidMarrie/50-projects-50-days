const containerEl = document.getElementById("container");

window.addEventListener("keydown", displayKeyProps);

function displayKeyProps(event) {
	const keyProperty = event.key;
	const keyCodeProperty = event.keyCode;
	const codeProperty = event.code;

	Array.from(containerEl.children).forEach((childEl) => childEl.remove());

	if (keyProperty === " ") {
		createKeyElement("space", "Event.key");
	} else {
		createKeyElement(keyProperty, "Event.key");
	}

	createKeyElement(keyCodeProperty, "Event.keyCode");
	createKeyElement(codeProperty, "Event.code");
}

function createKeyElement(elementText, eventProperty) {
	const div = document.createElement("div");
	const small = document.createElement("small");

	div.classList.add("key");
	div.textContent = elementText;
	small.textContent = eventProperty;
	div.appendChild(small);

	containerEl.appendChild(div);
}
