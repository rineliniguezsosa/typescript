import axios from 'axios'

export const getPokemon = async (pokemon:string | number) =>{
    console.log();
    try{
        const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        console.log(request);
    }
    catch(error){
        console.log('algo salio mal :(',error);
    }
    
    
}