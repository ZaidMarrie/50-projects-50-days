const dragElement = document.querySelector(".fill");
const dropElements = document.querySelectorAll(".empty");

for (const dropElement of dropElements) {
	dropElement.addEventListener("dragenter", dragEnter);
	dropElement.addEventListener("dragleave", dragLeave);
	dropElement.addEventListener("dragover", dragOver);
	dropElement.addEventListener("drop", dragDrop);
}

dragElement.addEventListener("dragstart", dragStart);
dragElement.addEventListener("dragend", dragEnd);

function dragStart() {
	this.className += " hold";
	setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
	this.className = "fill";
}

function dragEnter(e) {
	e.preventDefault();
}

function dragLeave() {
	this.className = "empty";
}

function dragOver(e) {
	e.preventDefault();
	this.className += " hovered";
}

function dragDrop() {
	this.className = "empty";
	this.append(dragElement);
}
