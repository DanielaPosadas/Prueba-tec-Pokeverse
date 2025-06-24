export const card = async (start, limit) => {
   let resp = {};

   try {
      resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${limit}`);
   } catch (error) {
      console.error('AQUÍ EL ERROR', error);
   }

   let urls = resp.data.results.map(items => items.url);

   const resultado = urls.map(async urls => {
      try {
         const respuesta = await axios.get(urls);
         return respuesta;
      } catch (error) {
         console.error('AQUÍ EL ERROR', error);
      }
   });

   let resultadosFinales;

   try {
      resultadosFinales = await Promise.all(resultado);
   } catch (error) {
      console.log('Algo no salio bien');
   }

   const finalArray = resultadosFinales.map(item => item.data);

   return finalArray;
};

export default card;
