const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const searchInput = document.getElementById("search");
const mainEl = document.getElementById("main");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const user = searchInput.value;

	if (user) {
		getUser(user);

		searchInput.value = "";
		searchInput.focus();
	}
});

async function getUser(username) {
	try {
		const { data } = await axios.get(API_URL + username);

		createProfileCard(data);
		getUserRepos(username);
	} catch (err) {
		createErrorCard("No profile with that username found!");
		console.error(err);
	}
}

async function getUserRepos(username) {
	try {
		const { data } = await axios.get(API_URL + username + "/repos?sort=updated&per_page=5");

		addReposToCard(data);
	} catch (err) {
		createErrorCard("Problem fetching user repositories.");
		console.error(err);
	}
}

function createProfileCard(user) {
	const cardMarkup = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>

      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

	mainEl.innerHTML = cardMarkup;
}

function createErrorCard(message) {
	const cardMarkup = `
    <div class="card">
      <h2>${message}</h2>
    </div>
  `;

	mainEl.innerHTML = cardMarkup;
}

function addReposToCard(repos) {
	const reposEl = document.getElementById("repos");

	repos.forEach((repo) => {
		const repoLink = document.createElement("a");
		repoLink.classList.add("repo");
		repoLink.textContent = repo.name;
		repoLink.href = repo.html_url;
		repoLink.target = "_blank";

		reposEl.appendChild(repoLink);
	});
}
