const rippleButton = document.querySelector(".btn--ripple");

rippleButton.addEventListener("click", addRippleEffect);

function addRippleEffect(event) {
	const x = event.clientX;
	const y = event.clientY;
	const buttonOffsetTop = event.target.offsetTop;
	const buttonOffsetLeft = event.target.offsetLeft;
	const rippleTop = y - buttonOffsetTop;
	const rippleLeft = x - buttonOffsetLeft;

	const rippleEffect = document.createElement("span");
	rippleEffect.classList.add("circle");
	rippleEffect.style.left = rippleLeft + "px";
	rippleEffect.style.top = rippleTop + "px";
	event.target.appendChild(rippleEffect);

	setTimeout(() => rippleEffect.remove(), 500);
}
