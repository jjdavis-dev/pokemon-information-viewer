const searchBtn = document.getElementById("searchBtn");
const pokemonInput = document.getElementById("pokemonInput");
const pokemonResult = document.getElementById("pokemonResult");

/* Button Click (search by clicking button) */
searchBtn.addEventListener("click", () => {
  const userInput = pokemonInput.value.toLowerCase().trim();

  if (userInput === "") {
    pokemonResult.innerHTML = "<p>Please enter a Pokémon name or ID.</p>";
    return;
  }

  pokemonResult.innerHTML = "<p>Loading Pokémon data...</p>";

  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      return response.json();
    })
    .then(data => {
      displayPokemon(data);
    })
    .catch(error => {
      pokemonResult.innerHTML = "<p>Pokémon not found. Try again.</p>";
      console.error(error);
    });
});

/* Enter-Key Support (Added this to allow search by pressing enter instead of button click) */
pokemonInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});

/* Display Pokémon Data*/
function displayPokemon(data) {
  const typesHTML = data.types
    .map(typeObj => {
      return `<span class="type-badge ${typeObj.type.name}">
        ${typeObj.type.name}
      </span>`;
    })
    .join("");

  pokemonResult.innerHTML = `
    <div class="pokemon-card">
      <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      
      <div class="types-container">
        ${typesHTML}
      </div>

      <p><strong>Height:</strong> ${data.height}</p>
      <p><strong>Weight:</strong> ${data.weight}</p>
    </div>
  `;
}
