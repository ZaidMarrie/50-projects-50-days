const themeToggleBtn = document.querySelector(".theme-toggle");
const hoursHandEl = document.querySelector(".needle--hours");
const minutesHandEl = document.querySelector(".needle--minutes");
const secondsHandEl = document.querySelector(".needle--seconds");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function toggleTheme(event) {
	const currentText = themeToggleBtn.textContent.toLowerCase();
	const body = document.body;

	if (body.classList.contains("dark")) {
		body.classList.remove("dark");
	} else {
		body.classList.add("dark");
	}

	themeToggleBtn.textContent = currentText === "dark mode" ? "light mode" : "dark mode";
}

themeToggleBtn.addEventListener("click", toggleTheme);

function setTime() {
	const currentDateTime = new Date();
	const hours = currentDateTime.getHours();
	const minutes = currentDateTime.getMinutes();
	const seconds = currentDateTime.getSeconds();
	const day = currentDateTime.getDay();
	const date = currentDateTime.getDate();
	const month = currentDateTime.getMonth();

	hoursHandEl.style.rotate = `${scale(hours, 0, 11, 0, 360)}deg`;
	minutesHandEl.style.rotate = `${scale(minutes, 0, 59, 0, 360)}deg`;
	secondsHandEl.style.rotate = `${scale(seconds, 0, 59, 0, 360)}deg`;

	const hoursText = hours < 10 ? "0" + hours : hours;
	const minutesText = minutes < 10 ? "0" + minutes : minutes;
	const timeOfDay = hours >= 12 ? "PM" : "AM";

	timeEl.textContent = `${hoursText}:${minutesText} ${timeOfDay}`;
	dateEl.textContent = `${days[day]}, ${months[month]} ${date}`;
}

const timerId = setInterval(setTime, 1000);

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
