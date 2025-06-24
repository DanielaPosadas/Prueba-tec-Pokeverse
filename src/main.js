import card from "./composable/usePokemonService.js";
import IndividualCard from "./components/card.js";

let start = 0;
const limit = 20;

const loader = document.querySelector('.loader');
const mainContainer = document.querySelector('.cards-container');

const resultados = await IndividualCard(start, limit);
console.log("Resultados", resultados)
mainContainer.appendChild(resultados);


if(mainContainer){
    loader.style.display = 'none';
} else{
    loader.style.display = 'block';
}

//INNFINITE SCROLL

window.addEventListener('scroll', async() => {
    if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        start += limit;
        const resultados = await IndividualCard(start, limit);
        mainContainer.appendChild(resultados);
        console.log("Resultados en scroll", resultados)
    }

})