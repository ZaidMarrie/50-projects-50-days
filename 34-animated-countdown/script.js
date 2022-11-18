const nums = document.querySelectorAll(".nums span");
const counterEl = document.querySelector(".counter");
const finalMsgEl = document.querySelector(".final");
const replayButton = document.querySelector("#replay");

runCountdown();

replayButton.addEventListener("click", restartCountdown);

function runCountdown() {
	const lastIndex = nums.length - 1;

	nums.forEach((num, index) => {
		num.addEventListener("animationend", (e) => {
			const { animationName } = e;

			if (animationName === "rotateIn" && index !== lastIndex) {
				num.className = "out";
			} else if (animationName === "rotateOut" && num.nextElementSibling) {
				num.nextElementSibling.className = "in";
			} else {
				counterEl.classList.add("hide");
				finalMsgEl.classList.add("show");
			}
		});
	});
}

function restartCountdown() {
	counterEl.classList.remove("hide");
	finalMsgEl.classList.remove("show");

	nums.forEach((num) => (num.className = ""));
	nums[0].classList.add("in");

	runCountdown();
}
