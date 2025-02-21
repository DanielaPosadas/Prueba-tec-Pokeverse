
export const favoritos = () => {

  const cards = document.getElementById('cards-container');
  const generalContainerFav = document.createElement('div'); 
  generalContainerFav.setAttribute('id', "favView")
  const local= JSON.parse(localStorage.getItem('favoritos'));
  cards.appendChild(generalContainerFav);

  const paginacion = document.getElementById('pagination__container');
  paginacion.style.display= 'none'

  const noLocal = document.createElement('p');
  noLocal.textContent = "No tienes favoritos aún";

  const lista = document.createElement('ul')
    
  local.forEach(item => {
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
      secondaryCardContainer.appendChild(image);
        secondaryCardContainer.appendChild(name);
       secondaryCardContainer.appendChild(types);
        secondaryCardContainer.appendChild(stats);
        cardContainer.appendChild(containerHpNum);
        cardContainer.appendChild(secondaryCardContainer);
       
        lista.appendChild(cardContainer);
    })

    generalContainerFav.appendChild(lista);
  cards.appendChild(generalContainerFav);
return generalContainerFav
    
  };