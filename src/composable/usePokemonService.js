
export const card = async (offset, limit) => {
    let resp = {};
    try {
        resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    } catch (error){
        console.error("AQUÍ EL ERROR", error)
    }

    let urls = resp.data.results.map(items => items.url);

    const resultado = urls.map(async (urls) => {
        try {
            const respuesta = await axios.get(urls)
            return respuesta
        } catch (error){
            console.error("AQUÍ EL ERROR", error)
        }
    });

    let resultadosFinales;

    try{
        resultadosFinales = await Promise.all(resultado)
        console.log("Esta es la respuesta")
    } catch (error) {
        console.log("no salio bien")
    }

    const finalArray = resultadosFinales.map(item => item.data)
    
    return finalArray
}