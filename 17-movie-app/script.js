const API_KEY = "306ac06240237daeeb699e012110a0d7";
const API_URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=`;

const formEl = document.getElementById("form");
const searchEl = document.getElementById("search");
const mainEl = document.getElementById("main");

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();
	console.log(data.results);
	displayMovies(data.results);
}

function displayMovies(movies) {
	Array.from(mainEl.children).forEach((childEl) => childEl.remove());

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;
		createMovieComponent(title, poster_path, vote_average, overview);
	});
}

function createMovieComponent(title, posterImg, vote, overview) {
	// Create elements
	const movieEl = document.createElement("div");
	const movieImgEl = document.createElement("img");
	const movieInfo = document.createElement("div");
	const movieTitle = document.createElement("h2");
	const movieRating = document.createElement("span");
	const movieOverview = document.createElement("div");
	const h3El = document.createElement("h3");
	const movieDesc = document.createElement("p");

	// Add element attributes
	movieEl.classList.add("movie");
	movieImgEl.classList.add("movie__cover");
	movieImgEl.src = IMAGE_PATH + posterImg;
	movieImgEl.alt = title;
	movieInfo.classList.add("movie__info");
	movieTitle.classList.add("movie__title");
	movieRating.classList.add("movie__rating");
	movieRating.classList.add(getClassByRate(vote));
	movieOverview.classList.add("movie__overview");

	movieTitle.textContent = title;
	h3El.textContent = "Overview";
	movieDesc.textContent = overview;

	movieInfo.appendChild(movieTitle);
	movieInfo.appendChild(movieRating);
	movieOverview.appendChild(h3El);
	movieOverview.appendChild(movieDesc);
	movieEl.appendChild(movieImgEl);
	movieEl.appendChild(movieInfo);
	movieEl.appendChild(movieOverview);

	mainEl.appendChild(movieEl);
}

function getClassByRate(voteAverage) {
	if (voteAverage >= 8) {
		return "green";
	} else if (voteAverage >= 5) {
		return "orange";
	} else {
		return "red";
	}
}

getMovies(API_URL);

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	const searchQuery = searchEl.value;

	if (searchQuery && searchQuery !== "") {
		getMovies(SEARCH_URL + searchQuery);
		searchEl.value = "";
	} else {
		window.location.reload();
	}
});
