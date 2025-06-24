import card from '../composable/usePokemonService.js';
import namePokemon from '../composable/usePokemonNameService.js';
import modal from './modal.js';
import types from './type.js';
export const IndividualCard = async (start, limit) => {
   let timeout = null;
   const lista = document.createElement('ul');
   const pokemonInput = document.getElementById('search');
   const resultados = await card(start, limit);
   const modalContainer = document.querySelector('.modalContainer');

   renderCards(resultados);

   pokemonInput.addEventListener('keyup', async () => {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
         if (pokemonInput.value.length >= 3) {
            const resultadosName = [await namePokemon(pokemonInput.value)];
            lista.innerHTML = '';
            renderCards(resultadosName);
         } else {
            lista.innerHTML = '';
            renderCards(resultados);
         }
      }, 400);
   });

   function renderCards(resultados) {
      resultados.forEach(item => {
         const cardContainer = document.createElement('li');
         cardContainer.setAttribute('class', 'liContainer');
         const secondaryCardContainer = document.createElement('div');
         secondaryCardContainer.setAttribute('class', 'secondaryCardContainer');

         const containerHpNum = document.createElement('div');
         containerHpNum.setAttribute('class', 'containerHpNum');
         const hpContainer = document.createElement('div');
         hpContainer.setAttribute('class', 'hpContainer');
         const hp = document.createElement('p');
         hpContainer.appendChild(hp);
         hp.setAttribute('class', 'hp');
         hp.textContent = 'HP';
         const num = document.createElement('p');
         num.textContent = item.stats[0].base_stat;
         hpContainer.appendChild(num);
         containerHpNum.appendChild(hpContainer);

         const image = document.createElement('img');
         image.src = item.sprites.front_shiny;
         image.setAttribute('class', 'pokeImg');

         const name = document.createElement('h4');
         name.setAttribute('class', 'name');
         name.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);

         const fav = document.createElement('img');
         fav.src = 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png';
         fav.setAttribute('class', 'fav');

         secondaryCardContainer.appendChild(image);
         secondaryCardContainer.appendChild(name);
         secondaryCardContainer.appendChild(types(item));
         secondaryCardContainer.appendChild(fav);
         cardContainer.appendChild(containerHpNum);
         cardContainer.appendChild(secondaryCardContainer);

         lista.appendChild(cardContainer);

         cardContainer.addEventListener('click', () => {
            modalContainer.style.display = 'block';
            document.body.style.overflow = 'hidden';
            console.log('HA DADO CLICK');
            modal(item);
         });
      });
   }

   return lista;
};
export default IndividualCard;
