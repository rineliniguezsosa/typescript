import axios from 'axios'
import { Pokemon } from '../interfaces';

export const getPokemon = async (pokemon:number):Promise<Pokemon>  =>{

        const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return data;    
    
    
}