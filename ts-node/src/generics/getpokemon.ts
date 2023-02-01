import axios from 'axios'

export const getPokemon = async (pokemon:string | number) =>{
    console.log();
    const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
}