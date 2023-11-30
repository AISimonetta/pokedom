import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

const card = document.querySelector<HTMLElement>(".card-container");

if (!card) {
  throw new Error("There is an error with the selector");
}

const getCompanyHTML = (pokemonArray: Pokemon[]): string => {
  const cardHtml = pokemonArray
    .map((pokemons) => {
      return `
            <div class="card">
                <img class="card__image" src=${pokemons.sprite}>
                <div class="card__content">
                <h class="card__heading">${pokemons.name}</h>
                <p class="card__text">${pokemons.name} #${pokemons.id}  is a ${pokemons.types} type pokemon</p>
                </div>
            </div>
            `;
        })
    .join("");
  return cardHtml;
};

const cardcardForHtml = getCompanyHTML(pokemonArray);
card.innerHTML = cardcardForHtml;

const filteredNames = pokemonArray.map(pokemons => pokemons.name);
console.log(filteredNames);