const cardHeader = document.getElementById("cardHeader");
const cardTitle = document.getElementById("cardTitle");
const cardExcerpt = document.getElementById("cardExcerpt");
const profileImage = document.getElementById("profileImg");
const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");
const animatedBackgrounds = document.querySelectorAll(".animated-bg");

setTimeout(getData, 2500);

function getData() {
	const headerImg = document.createElement("img");
	headerImg.src = "https://unsplash.it/500/300";
	cardHeader.appendChild(headerImg);

	cardTitle.textContent = "Lorem ipsum dolor sit amet";
	cardExcerpt.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea saepe odit exercitationem cupiditate deserunt.";
	nameEl.textContent = "John Doe";
	dateEl.textContent = "Sep 26, 2022";

	const avatar = document.createElement("img");
	avatar.src = "https://randomuser.me/api/portraits/men/45.jpg";
	profileImage.appendChild(avatar);

	animatedBackgrounds.forEach((element) => {
		element.classList.remove("animated-bg");
		if (element.classList.contains("animated-bg--text")) {
			element.classList.remove("animated-bg--text");
		}
	});
}
