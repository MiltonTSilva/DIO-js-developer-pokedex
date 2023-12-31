const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const arrayPokemon = [];

const maxRecords = 151;
const limit = 20;
let offset = 0;

loadPokemonItens(offset, limit);

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

function convertPokemonToLi(pokemon) {
  arrayPokemon.push(pokemon);

  return `
        <a href="poke-details.html" alt="Vai para pagina de detalhes"
        onclick="onClickDetails('${pokemon.number}')">
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
        </a>
    `;
}

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

function onClickDetails(number) {
  const jsonPokemon = JSON.stringify(arrayPokemon);
  localStorage.setItem("pokemon", jsonPokemon);
  localStorage.setItem("number", number);
}
