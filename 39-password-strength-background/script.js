const passwordInput = document.getElementById("password");
const backgroundImg = document.getElementById("background");

passwordInput.addEventListener("input", (event) => {
	const { value: password } = event.target;
	const passwordLength = password.length;
	const blurValue = 20 - passwordLength * 2;
	backgroundImg.style.filter = `blur(${blurValue}px)`;
});
