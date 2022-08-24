const textareaInput = document.getElementById("textarea");
const tagsListEl = document.querySelector(".tags");

textareaInput.focus();

textareaInput.addEventListener("keyup", (event) => {
	let times = 30;
	let tags = event.target.value.split(",");
	tags = tags.filter((tag) => tag.trim() !== "").map((tag) => tag.trim());

	createTags(tags);

	if (event.key === "Enter") {
		const timerId = setInterval(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);

			setTimeout(() => {
				removeTagHighlight(randomTag);
			}, 100);
		}, 100);

		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
			clearInterval(timerId);
		}, times * 100);
	}
});

function createTags(tagsArr) {
	Array.from(tagsListEl.children).forEach((childEl) => childEl.remove());

	for (const tag of tagsArr) {
		const tagEl = document.createElement("li");
		tagEl.classList.add("tag");
		tagEl.textContent = tag;
		tagsListEl.appendChild(tagEl);
	}
}

function pickRandomTag() {
	const tagElements = document.querySelectorAll(".tag");
	return tagElements[Math.floor(Math.random() * tagElements.length)];
}

function highlightTag(tag) {
	tag.classList.add("highlight");
}

function removeTagHighlight(tag) {
	tag.classList.remove("highlight");
}
