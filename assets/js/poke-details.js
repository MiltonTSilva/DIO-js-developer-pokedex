const pokemonItem = document.getElementById("pokemonItem");

var number = JSON.parse(localStorage.getItem("number"));
var xpokemon = JSON.parse(localStorage.getItem("pokemon"));

var pokemon = xpokemon[number - 1];

(function () {
  document.body.classList.add(`${pokemon.type}`);
  pokemonItem.innerHTML = pokemonDetails(pokemon);
  onClickAbout();
})();

function pokemonDetails(pokemon) {
  return `
      
        <div class="pokemon ${pokemon.type}">
          <div class="title">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.number}</span>
          </div>

          <div class="detail">

            <div class="item">
            <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>
              <div class="photo">
                <img src="${pokemon.photo}" alt="${pokemon.name}" />
              </div>
            </div>
          </div>
        </div>
   
    `;
}

function onClickAbout() {
  const itemDetails = document.getElementById("itemDetails");
  itemDetails.innerHTML = `

        <div class="about1">
            <div><label class="text-gray">Base. Exp.</label> <label>${pokemon.baseExp} exp.</label></div>
            <div><label class="text-gray">Height</label> <label class="height">${pokemon.height}</label></div>
            <div><label class="text-gray">Weight</label> <label class="weight">${pokemon.weight}</label></div>
            <div><label class="text-gray">Abilities</label> <label class="abilities">${pokemon.abilities}</label></div>
            <div><label class="text-gray">Egg Groups</label> <label class="eggs">${pokemon.eggGroups}</label></div>
            <div><label class="text-gray">Generation</label> <label class="generation">${pokemon.generation}</label></div>
        </div>

        <div class="about2">
        <h4> Description </h4>
            <label>${pokemon.description}</label>
        </div>
                `;
  itemDetails.style.marginLeft = "15px";
}

function onClickBase() {
  const itemDetails = document.getElementById("itemDetails");
  itemDetails.innerHTML = `
      <div class="infoModal">
        <div class="about1">
            <div
                <label class="text-gray">HP</label>
                <div class="hp">
                    <label class="text-black">${pokemon.stats[0]}</label> 
                    <div class="health-bar">
                        <div class="bar-red">
                        </div>
                    </div>
                </div>
            </div>
            <div
                <label class="text-gray">Attack</label>
                <div class="atk">
                    <label class="text-black">${pokemon.stats[1]}</label> 
                    <div class="health-bar">
                        <div class="bar-red">
                        </div>
                    </div>
                </div>
            </div>
            <div
                <label class="text-gray">Defense</label>
                <div class="dfs">
                    <label class="text-black">${pokemon.stats[2]}</label> 
                    <div class="health-bar">
                        <div class="bar-red">
                        </div>
                    </div>
                </div>
            </div>
            <div
                <label class="text-gray">Sp. Atk.</label>
                <div class="sp-atk">
                    <label class="text-black">${pokemon.stats[3]}</label> 
                    <div class="health-bar">
                        <div class="bar-red">
                        </div>
                    </div>
                </div>
            </div>
            <div
                <label class="text-gray">Sp. Def.</label>
                <div class="sp-def">
                    <label class="text-black">${pokemon.stats[4]}</label> 
                    <div class="health-bar">
                        <div class="bar-red">
                        </div>
                    </div>
                </div>
            </div>
            <div
                <label class="text-gray">Speed</label>
                <div class="spd">
                    <label class="text-black">${pokemon.stats[5]}</label> 
                    <div class="health-bar">
                        <div class="bar-red">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;
}

function onClickEvolution() {
  const itemDetails = document.getElementById("itemDetails");
  const formatEvolution = formatEvolutions();

  itemDetails.innerHTML = `
        <div class="about1">
            <div class="imgEvolutions">${formatEvolution}</div>
            <label class="evolutions"></label>

        </div>
        `;
}

function formatEvolutions() {
  //let pokemon = catchPokemon(pokemonId);

  let upperName = pokemon.evolutions.map((e) => {
    return " " + e.charAt(0).toUpperCase() + e.substring(1);
  });

  let imgPokemons = pokemon.evolutionsSprites.map((evolvUrl, index) => {
    return `<div><img src='${evolvUrl}'> <label>${upperName[index]}</label></div>`;
  });

  return imgPokemons.join("");
}

function onClickMoves() {
  const itemDetails = document.getElementById("itemDetails");

  itemDetails.innerHTML = `
      <div class="infoModal">
              <div class="about1">
                  <label class="moves">
                      <table>
                          <tbody></tbody>
                      </table>
                  </label>
              </div>
      </div>
    `;
  formatMoves();
}

function formatMoves() {
  let moves = document.querySelector(".moves table tbody");

  let movesUpperText = pokemon.moves;

  let upper = movesUpperText.map((e) => {
    return "• " + e.charAt(0).toUpperCase() + e.substring(1) + "<br />";
  });

  for (i = 0; i < upper.length; i += 2) {
    if (upper[i + 1] != undefined) {
      moves.innerHTML += `<td>${upper[i]}</td>
                                <td>${upper[i + 1]}</td>`;
    } else {
      moves.innerHTML += `<td>${upper[i]}</td>`;
    }
  }
}
