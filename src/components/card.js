import card from "../composable/usePokemonService.js";

export const IndividualCard = async (start, limit) => {

    const resultados = await card(start, limit);

    const lista = document.createElement('ul');
    
    resultados.forEach(item => {
        const cardContainer = document.createElement('li');
        const secondaryCardContainer = document.createElement('div');
        secondaryCardContainer.setAttribute('class', 'secondaryCardContainer')
        
        const containerHpNum= document.createElement('div');
        containerHpNum.setAttribute('class', 'containerHpNum');
        const hpContainer = document.createElement('div');
        hpContainer.setAttribute('class', 'hpContainer')
        const hp = document.createElement('p');
        hpContainer.appendChild(hp);
        hp.setAttribute('class', 'hp')
        hp.textContent = "HP";
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
        
        const types = document.createElement('p');
        types.setAttribute('class', 'types')
        
        const typesText = item.types.map(resp => resp.type.name).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('/');

        types.textContent = typesText;
        console.log("typesText", typesText)

        const typeColor = {
            'fire': '#ff0000',
            'grass': '#008000',
            'water': '#149ded',
            'bug': '#09b816',
            'ground': '#a97a19e0',
            'electric': '#ffdd50',
            'fairy': '#ff50e2e6',
            'normal': '#a97a19e0',
            'poison': '#a97a19e0',
            'ghost': '#a97a19e0',
            'flying': '#a97a19e0',
            'fighting': '#a97a19e0',
            'psychic': '#a97a19e0',
            'steel': '#a97a19e0',
            'dragon': '#a97a19e0',
            'ice': '#a97a19e0',
            'dark': '#a97a19e0',
            'rock': '#a97a19e0',
            'steel': '#a97a19e0',
            'dragon': '#a97a19e0',
        }

        const typesColors = Object.keys(typeColor);
        const allCombinations = {};

// Tipos individuales
typesColors.forEach(type => {
  allCombinations[type.charAt(0).toUpperCase() + type.slice(1)] = typeColor[type];
  console.log("allCombinations", allCombinations)
});

// Combinaciones dobles
for (let i = 0; i < typesColors.length; i++) {
    for (let j = 0; j < typesColors.length; j++) {
      if (i !== j) {
        const pair = [typesColors[i], typesColors[j]] && [typesColors[j], typesColors[i]];
        const key = pair.map(capitalize).join('/');
        console.log("pair", pair)
        console.log("key", key)
        if (!allCombinations[key]) {
          allCombinations[key] = typeColor[pair[0]];
          console.log("allCombinations", allCombinations)
        }
      }
    }
}
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
console.log(allCombinations);
        
        if(allCombinations[typesText]){
            types.style.backgroundColor = allCombinations[typesText];
        }

        const stats = document.createElement('div');
        stats.setAttribute("class", "statsContainer")
        const boxes = item.stats.map(item => item).slice(1, 4);
        boxes.map(element => {
            const attackContainer = document.createElement('div');
            attackContainer.setAttribute("class", "container")
            const score = document.createElement('p');
            score.setAttribute('class', 'score');
            attackContainer.appendChild(score);
            score.textContent = element.stat.name
            const attack = document.createElement('progress');
            attackContainer.appendChild(attack);
            attack.setAttribute('value', element.base_stat);
            attack.setAttribute('max', 100);

            if(element.stat.name === "special-attack"){
                attack.setAttribute("class", "special-attack")
            } else if(element.stat.name === "special-defense"){
                attack.setAttribute("class", "special-defense")
            } else if(element.stat.name === "attack"){
                attack.setAttribute("class", "attack")
            } else if(element.stat.name === "defense"){
                attack.setAttribute("class", "defense")
            }
            stats.appendChild(attackContainer)
        })

        const fav = document.createElement('img');
        fav.src = "https://cdn-icons-png.flaticon.com/512/1077/1077086.png"
        fav.setAttribute('class', 'fav')

        secondaryCardContainer.appendChild(image);
        secondaryCardContainer.appendChild(name);
        secondaryCardContainer.appendChild(types);
        secondaryCardContainer.appendChild(stats);
        secondaryCardContainer.appendChild(fav);
        cardContainer.appendChild(containerHpNum);
        cardContainer.appendChild(secondaryCardContainer);


        fav.addEventListener('click', ()=>{
            let pokemonFav = JSON.parse(localStorage.getItem('favoritos')) || [];
            let exist = pokemonFav.find(favPokemon => favPokemon.id === item.id)
            if (!exist) {
                pokemonFav.push(item);
                localStorage.setItem('favoritos', JSON.stringify(pokemonFav));
            }
        })

        lista.appendChild(cardContainer);
        console.log("RESULTADO EN CARD", cardContainer)
    });

    return lista
    
}
export default IndividualCard