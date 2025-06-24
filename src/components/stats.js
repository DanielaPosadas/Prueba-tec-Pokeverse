export const stats = item => {
   const stats = document.createElement('div');
   stats.setAttribute('class', 'statsContainer');
   const boxes = item.stats.map(item => item).slice(1, 6);
   boxes.map(element => {
      console.log('STAT', element);
      const attackContainer = document.createElement('div');
      attackContainer.setAttribute('class', 'container');
      const score = document.createElement('p');
      score.setAttribute('class', 'score');
      attackContainer.appendChild(score);
      score.textContent = element.stat.name;
      const attack = document.createElement('progress');
      attackContainer.appendChild(attack);
      attack.setAttribute('value', element.base_stat);
      attack.setAttribute('max', 100);

      const num = document.createElement('p');
      num.setAttribute('class', 'num');
      num.textContent = element.base_stat;
      attackContainer.appendChild(num);

      if (element.stat.name === 'special-attack') {
         attack.setAttribute('class', 'special-attack');
      } else if (element.stat.name === 'special-defense') {
         attack.setAttribute('class', 'special-defense');
      } else if (element.stat.name === 'attack') {
         attack.setAttribute('class', 'attack');
      } else if (element.stat.name === 'defense') {
         attack.setAttribute('class', 'defense');
      }
      stats.appendChild(attackContainer);
   });
   return stats;
};

export default stats;
