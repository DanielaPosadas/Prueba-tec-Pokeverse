export const namePokemon = async name => {
   let namePokemon = {};
   let urlsName = {};

   try {
      namePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      console.log('NAMEPOKEMON', namePokemon);
   } catch (error) {
      console.error('AQUÍ EL ERROR', error);
   }

   if (Array.isArray(namePokemon.data?.results)) {
      urlsName = namePokemon.data.results;
      const resultado = urlsName.map(async urlsName => {
         try {
            const respuesta = await axios.get(urlsName.url);
            console.log('RESPUESTA EN NOMBRE', respuesta);
            return respuesta;
         } catch (error) {
            console.error('AQUÍ EL ERROR', error);
         }

         let resultadosFinales;

         try {
            resultadosFinales = await Promise.all(resultado);
         } catch (error) {
            console.log('Algo no salio bien');
         }

         const finalArray = resultadosFinales.map(item => item.data);

         return finalArray;
      });
   } else {
      return (urlsName = namePokemon.data);
   }
};

export default namePokemon;
