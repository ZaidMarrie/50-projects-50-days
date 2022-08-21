const jokeButton = document.getElementById("jokeBtn");
jokeButton.addEventListener("click", getNewJoke);

async function getNewJoke() {
	const jokeElement = document.getElementById("joke");
	const requestOptions = {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	};

	const res = await fetch("https://icanhazdadjoke.com/", requestOptions);
	const data = await res.json();
	jokeElement.textContent = data.joke;
}

getNewJoke();
