
import { nav } from '../components/nav.js';
import { IndividualCard } from '../components/card.js';

//INSERTAR HEADER
export const home = () => {
    const general = document.createElement('div');
    const paginacion = document.getElementById('pagination__container');
    paginacion.style.display= 'flex';

    let offset = 0;
    const limit = 20;

    nav();

    const rendercards = async(offset, limit) => {
        let lista = await IndividualCard(offset, limit);
        general.appendChild(lista);
    }
    
    rendercards()


//BOTONES PARA CAMBIAR DE PÁGINA

    const changeAfter = document.getElementById('after');
    changeAfter.addEventListener('click', async() =>{
        offset += limit;
        await rendercards(offset, limit);
    })

    return general
    
}
export default home
