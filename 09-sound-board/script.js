const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
	const button = document.createElement("button");
	button.classList.add("btn");
	button.textContent = sound;

	button.addEventListener("click", () => {
		playSelectedAudio(sound);
	});

	document.getElementById("buttons").appendChild(button);
});

function playSelectedAudio(audioElement) {
	const otherAudioElements = sounds.filter((sound) => sound !== audioElement);

	otherAudioElements.forEach((audioId) => {
		const currentElement = document.getElementById(audioId);
		currentElement.pause();
		currentElement.currentTime = 0;
	});

	document.getElementById(audioElement).play();
}
