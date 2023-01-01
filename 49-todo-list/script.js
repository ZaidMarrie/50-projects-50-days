const form = document.getElementById("form");
const todoInput = document.getElementById("input");
const todosList = document.getElementById("todos");
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
	todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;

	if (todo) todoText = todo.text;

	if (todoText) {
		const todoEl = document.createElement("li");
		todoEl.textContent = todoText;

		todoEl.addEventListener("click", () => {
			todoEl.classList.toggle("completed");
			updateLS();
		});

		todoEl.addEventListener("contextmenu", (event) => {
			event.preventDefault();
			todoEl.remove();
			updateLS();
		});

		if (todo && todo.completed) {
			todoEl.classList.add("completed");
		}

		todosList.appendChild(todoEl);
		input.value = "";

		updateLS();
	}
}

function updateLS() {
	const todoEls = document.querySelectorAll(".todos li");

	const todos = [];

	todoEls.forEach((todoEl) => {
		todos.push({
			text: todoEl.textContent,
			completed: todoEl.classList.contains("completed"),
		});
	});

	localStorage.setItem("todos", JSON.stringify(todos));
}
