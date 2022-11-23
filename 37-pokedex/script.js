const containerEl = document.getElementById("container");

const pokemonCount = 150;
const colors = {
	fire: "#FDDFDF",
	grass: "#DEFDE0",
	electric: "#FCF7DE",
	water: "#DEF3FD",
	ground: "#f4e7da",
	rock: "#d5d5d4",
	fairy: "#fceaff",
	poison: "#98d7a5",
	bug: "#f8d5a3",
	dragon: "#97b3e6",
	psychic: "#eaeda1",
	flying: "#F5F5F5",
	fighting: "#E6E0D4",
	normal: "#F5F5F5",
};
const mainTypes = Object.keys(colors);

fetchPokenData();

async function fetchPokenData() {
	for (let i = 1; i <= pokemonCount; i++) {
		await getPokemonData(i);
	}
}

async function getPokemonData(id) {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();

	const pokemonId = data.id;
	const name = data.name;

	const pokemonTypes = data.types.map((type) => type.type.name);
	const type = mainTypes.find((type) => pokemonTypes.indexOf(type) > -1);

	const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	const color = colors[type];

	createPokemonCard(pokemonId, name, type, pokemonImg, color);
}

function createPokemonCard(id, name, type, imgUrl, color) {
	// Create card container element
	const card = document.createElement("div");
	card.classList.add("card");
	card.style.backgroundColor = color;

	// Create card image
	const cardImageWrapper = document.createElement("div");
	cardImageWrapper.classList.add("card__image-wrapper");
	const cardImage = document.createElement("img");
	cardImage.src = imgUrl;
	cardImage.alt = name;
	cardImageWrapper.appendChild(cardImage);
	card.appendChild(cardImageWrapper);

	// create card info element
	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card__info");
	card.appendChild(cardInfo);

	// Create pokemon number element
	const numberEl = document.createElement("span");
	numberEl.classList.add("number");
	numberEl.textContent = `#${id.toString().padStart(3, "0")}`;
	cardInfo.appendChild(numberEl);

	// Create pokemon name element
	const nameEl = document.createElement("h3");
	nameEl.classList.add("name");
	nameEl.textContent = name;
	cardInfo.appendChild(nameEl);

	// Create pokemon name element
	const typeEl = document.createElement("small");
	typeEl.classList.add("type");
	typeEl.textContent = "Type: ";
	const typeSpan = document.createElement("small");
	typeSpan.textContent = type;
	typeEl.appendChild(typeSpan);
	cardInfo.appendChild(typeEl);

	// Append card to DOM
	containerEl.appendChild(card);
}
