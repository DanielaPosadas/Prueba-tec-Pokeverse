import typePokemon from '../components/type.js';
import statsPokemon from '../components/stats.js';

export const modal = pokemon => {
   const modalContainer = document.querySelector('.modalContainer');
   const close = document.createElement('img');
   close.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/75/75519.png');
   close.setAttribute('class', 'close');
   modalContainer.appendChild(close);

   close.addEventListener('click', () => {
      modalContainer.style.display = 'none';
      document.body.style.overflow = 'auto';
      modalContainer.innerHTML = '';
   });

   //IMAGEN POKEMÓN
   const image = document.createElement('img');
   image.src = pokemon.sprites.front_shiny;
   image.setAttribute('class', 'pokeImg');

   modalContainer.appendChild(image);

   //NOMBRE POKEMÓN
   const name = document.createElement('h4');
   name.setAttribute('class', 'name');
   name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
   modalContainer.appendChild(name);

   //TIPO POKEMÓN
   const types = typePokemon(pokemon);
   modalContainer.appendChild(types);

   //ESTADISTICAS POKEMÓN
   const stats = statsPokemon(pokemon);
   modalContainer.appendChild(stats);

   //ALTURA Y PESO
   const height = document.createElement('p');
   height.setAttribute('class', 'height');
   height.textContent = `Height: ${pokemon.height / 10} m`;
   modalContainer.appendChild(height);

   const weight = document.createElement('p');
   weight.setAttribute('class', 'weight');
   weight.textContent = `Weight: ${pokemon.weight / 10} kg`;
   modalContainer.appendChild(weight);

   //HABILIDADES
   const abilities = document.createElement('p');
   abilities.setAttribute('class', 'abilities');
   abilities.textContent = `Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}`;
   modalContainer.appendChild(abilities);

   //MOVIMIENTOS
   const moves = document.createElement('p');
   moves.setAttribute('class', 'moves');
   moves.textContent = `Moves: ${pokemon.moves
      .map(move => move.move.name)
      .slice(0, 5)
      .join(', ')}`;
   modalContainer.appendChild(moves);

   //EXPERIENCIA BASE
   const experience = document.createElement('p');
   experience.setAttribute('class', 'experience');
   experience.textContent = `Experience: ${pokemon.base_experience}`;
   modalContainer.appendChild(experience);

   return modalContainer;
};
export default modal;
