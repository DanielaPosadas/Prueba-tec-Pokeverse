
import { navigateTo } from "../router.js";

export const nav = () => {
    const header = document.querySelector('header');
    const desk = document.querySelector('nav');
    if(!desk){
   
    const div_nav = document.createElement('nav');
    const showNav = document.createElement('div');
    showNav.style.display = 'block'
    header.appendChild(div_nav);

    
    const icon = document.createElement('img');
    icon.setAttribute('src', 'https://w7.pngwing.com/pngs/451/380/png-transparent-hamburger-button-computer-icons-menu-menu-rectangle-desktop-wallpaper-button.png');
    icon.setAttribute('class', 'imgHeader')

    const button = document.createElement('button')
    button.setAttribute('id', 'navButton')
    button.appendChild(icon)

    div_nav.appendChild(button);

    const imgCross = document.createElement ('img')
    imgCross.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/75/75519.png')
    imgCross.setAttribute('class', 'close')

    showNav.setAttribute('class', 'showNav');
    const pokeImage = document.createElement('img');
    pokeImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png')
    pokeImage.setAttribute('alt', 'pokebola')
    pokeImage.setAttribute('id', 'pokeimage');

    const api = document.createElement('p')
    api.textContent = "POKE API";
    api.setAttribute('class', 'api');

    const inicio = document.createElement('p')
    inicio.textContent = "HOME";
    inicio.setAttribute('class', 'inicio');

    const home = document.createElement('p')
    home.textContent = "HOME";
    home.setAttribute('class', 'hola');

    const favorites = document.createElement('p');
    favorites.textContent = "FAVORITOS";
    favorites.setAttribute('class', 'favorito')

    const pokeapi = document.createElement('p')
    pokeapi.textContent = "POKE API";
    pokeapi.setAttribute('class', 'api');

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'imageContainer')
    imageContainer.appendChild(imgCross);
    showNav.appendChild(imageContainer);

    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class', 'mainContainer')
    mainContainer.appendChild(pokeImage);
    mainContainer.appendChild(favorites);
    mainContainer.appendChild(home);
    mainContainer.appendChild(pokeapi);
    showNav.appendChild(mainContainer)

    
    button.addEventListener('click', () => {
        div_nav.appendChild(showNav);
        if(showNav.style.display === 'none'){
            showNav.style.display = 'block'
            imgCross.style.display = 'block'
            button.style.display = 'none'
        } else {
            showNav.style.display === 'none'
            button.style.display = 'block'
        }
    });

    imgCross.addEventListener('click', () => {
        if(showNav.style.display === 'block'){
            showNav.style.display ='none'
            imgCross.style.display = 'block'
            button.style.display = 'block'
        } else {
            showNav.style.display = 'block'
            imgCross.style.display = 'none'
            button.style.display = 'none'
        }
    })

    const desktopContainer = document.createElement('div');
    const imgFavorites = document.createElement('img');
    imgFavorites.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png');
    imgFavorites.setAttribute('class', 'imgFavorites')
    desktopContainer.setAttribute('class','desktopContainer')
    desktopContainer.appendChild(inicio);
    desktopContainer.appendChild(api);
    desktopContainer.appendChild(imgFavorites);
    div_nav.appendChild(desktopContainer);

    imgFavorites.addEventListener('click', function(){
        navigateTo('/favoritos');
    })

    inicio.addEventListener('click', function(){
        navigateTo('/');
    })

    favorites.addEventListener('click' ,function(){
    navigateTo('/favoritos')
    })
    home.addEventListener('click' ,function(){
        navigateTo('/')
        })
    api.addEventListener('click' ,function(){
        window.open('https://pokeapi.co/', '_blank');
    })
    pokeapi.addEventListener('click' ,function(){
        window.open('https://pokeapi.co/', '_blank');
    })

    return div_nav 
}
}