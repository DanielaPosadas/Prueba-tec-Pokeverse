export const types = item => {
   const types = document.createElement('p');
   types.setAttribute('class', 'types');

   const typesText = item.types
      .map(resp => resp.type.name)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('/');

   types.textContent = typesText;

   const typeColor = {
      fire: '#ff0000',
      grass: '#008000',
      water: '#149ded',
      bug: '#09b816',
      ground: '#a97a19e0',
      electric: '#ffdd50',
      fairy: '#ff50e2e6',
      normal: '#a97a19e0',
      poison: '#a97a19e0',
      ghost: '#a97a19e0',
      flying: '#a97a19e0',
      fighting: '#a97a19e0',
      psychic: '#a97a19e0',
      steel: '#a97a19e0',
      dragon: '#a97a19e0',
      ice: '#a97a19e0',
      dark: '#a97a19e0',
      rock: '#a97a19e0',
      steel: '#a97a19e0',
      dragon: '#a97a19e0',
   };

   const typesColors = Object.keys(typeColor);
   const allCombinations = {};

   // Tipos individuales
   typesColors.forEach(type => {
      allCombinations[type.charAt(0).toUpperCase() + type.slice(1)] = typeColor[type];
   });

   // Combinaciones dobles
   for (let i = 0; i < typesColors.length; i++) {
      for (let j = 0; j < typesColors.length; j++) {
         if (i !== j) {
            const pair = [typesColors[i], typesColors[j]] && [typesColors[j], typesColors[i]];
            const key = pair.map(capitalize).join('/');
            if (!allCombinations[key]) {
               allCombinations[key] = typeColor[pair[0]];
            }
         }
      }
   }
   function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
   }

   if (allCombinations[typesText]) {
      types.style.backgroundColor = allCombinations[typesText];
   }

   return types;
};
export default types;
