import { card } from "../composable/usePokemonService.js";

export const IndividualCard = async (offset, limit) => {

    const resultados = await card(offset, limit);


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
        image.src = item.sprites.back_default;
        image.setAttribute('class', 'pokeImg');

        const name = document.createElement('h4');
        name.setAttribute('class', 'name');
        name.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        
        const types = document.createElement('p');
        types.setAttribute('class', 'types')
        types.textContent = item.types.map(resp => resp.type.name).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('/');

        const stats = document.createElement('div');
        stats.setAttribute("class", "statsContainer")
        const boxes = item.stats.map(item => item).slice(1, 4);
        boxes.map(element => {
            const attackContainer = document.createElement('div');
            attackContainer.setAttribute("class",'attackContainer')
            const attack = document.createElement('p');
            attack.setAttribute('class', 'attack');
            attackContainer.appendChild(attack);
            attack.textContent = element.base_stat;
            const score = document.createElement('p');
            score.setAttribute('class', 'score');
            attackContainer.appendChild(score);
            score.textContent = element.stat.name
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
    });

    return lista
    
}
export default IndividualCard