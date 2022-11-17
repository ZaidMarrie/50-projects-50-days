const addButton = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
	notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", (event) => {
	addNewNote();
});

function addNewNote(text = "") {
	// Create note element
	const note = document.createElement("div");
	note.classList.add("note");

	// Create note toolbar element
	const noteToolbar = document.createElement("div");
	noteToolbar.classList.add("tools");

	// Create tool buttons and append it to toolbar element
	const editButton = document.createElement("button");
	editButton.classList.add("edit");
	editButton.innerHTML = '<i class="fas fa-edit"></i>';

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

	noteToolbar.appendChild(editButton);
	noteToolbar.appendChild(deleteButton);

	// Create note text container
	const noteMain = document.createElement("div");
	noteMain.classList.add("main");

	// Create note textarea
	const noteTextArea = document.createElement("textarea");

	// Check if noteMain/noteTextArea should be hidden
	if (text) {
		noteTextArea.classList.add("hidden");
		noteMain.innerHTML = marked.parse(text);
	} else {
		noteMain.classList.add("hidden");
	}

	// Add event handlers
	editButton.addEventListener("click", () => {
		noteMain.classList.toggle("hidden");
		noteTextArea.classList.toggle("hidden");

		if (!noteTextArea.classList.contains("hidden")) {
			noteTextArea.focus();
		}
	});

	deleteButton.addEventListener("click", () => {
		note.remove();
		updateLS();
	});

	noteTextArea.addEventListener("input", (e) => {
		const { value } = e.target;
		noteMain.innerHTML = marked.parse(value);

		updateLS();
	});

	// Append all elements to the note element & append note to body
	note.appendChild(noteToolbar);
	note.appendChild(noteMain);
	note.appendChild(noteTextArea);
	document.body.appendChild(note);
}

function updateLS() {
	const textAreas = document.querySelectorAll("textarea");
	const notes = [];

	textAreas.forEach((textArea) => notes.push(textArea.value));
	console.log(notes);
	localStorage.setItem("notes", JSON.stringify(notes));
}
