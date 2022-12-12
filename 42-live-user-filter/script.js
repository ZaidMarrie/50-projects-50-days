const usersList = document.getElementById("users");
const searchInput = document.getElementById("search");
const listItems = [];

searchInput.addEventListener("input", (e) => filterUsers(e.target.value));

getData();

async function getData() {
	const res = await fetch("https://randomuser.me/api?results=50");
	const { results } = await res.json();

	usersList.innerHTML = "";
	results.forEach((user) => {
		const userEl = createUserItem(user);
		usersList.appendChild(userEl);
	});
}

function createUserItem(user) {
	const listItem = document.createElement("li");

	listItem.innerHTML = `
  <img src="${user.picture.large}" alt="${user.name.first}" />
  <div class="user-info">
  <h4>${user.name.first} ${user.name.last}</h4>
  <p>${user.location.city}, ${user.location.country}</p>
  </div>
  `;

	listItems.push(listItem);
	return listItem;
}

function filterUsers(searchQuery) {
	listItems.forEach((item) => {
		const itemText = item.innerText.toLowerCase();

		if (itemText.includes(searchQuery.toLowerCase())) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});
}
