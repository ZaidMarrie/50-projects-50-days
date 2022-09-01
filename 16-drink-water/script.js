const smallCups = document.querySelectorAll(".cup--small");
const percentageEl = document.getElementById("percentage");
const litresEl = document.getElementById("litres");
const remainedEl = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, index) => {
	cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(currentIndex) {
	if (
		smallCups[currentIndex].classList.contains("full") &&
		smallCups[currentIndex].nextElementSibling &&
		!smallCups[currentIndex].nextElementSibling.classList.contains("full")
	) {
		currentIndex--;
	}

	smallCups.forEach((cup, index) => {
		if (index <= currentIndex) {
			// Checks if the last cup already has the .full class
			if (
				cup === smallCups[smallCups.length - 1] &&
				smallCups[smallCups.length - 1].classList.contains("full")
			) {
				cup.classList.remove("full");
			} else {
				cup.classList.add("full");
			}
		} else {
			cup.classList.remove("full");
		}
	});

	updateBigCup();
}

function updateBigCup() {
	const fullCupsAmount = document.querySelectorAll(".cup--small.full").length;
	const totalCups = smallCups.length;
	const cupVolume = (fullCupsAmount / totalCups) * 330;
	const cupVolumeLitres = 2 - (250 * fullCupsAmount) / 1000;

	if (fullCupsAmount === 0) {
		percentageEl.style.visibility = "hidden";
		percentageEl.style.height = 0;
	} else {
		percentageEl.style.visibility = "visible";
		percentageEl.style.height = `${cupVolume}px`;
		percentageEl.textContent = `${(fullCupsAmount / totalCups) * 100}%`;
	}

	if (fullCupsAmount === totalCups) {
		remainedEl.style.visibility = "hidden";
		remainedEl.style.height = 0;
	} else {
		remainedEl.style.visibility = "visible";
		remainedEl.style.height = `${cupVolume / totalCups}px`;
		litresEl.textContent = `${cupVolumeLitres}L`;
	}
}
