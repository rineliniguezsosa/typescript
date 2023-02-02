import { getPokemon } from './generics/getpokemon';
import { Pokemon } from './decoradores/class-pokemon'; //decoradores


getPokemon(1)
    .then( pokemon => console.log(pokemon.name))
    .catch( error => console.log(error))
    .finally( ()=> console.log('termino de consulta de la pokeapi'))
    
const pokemon = new Pokemon('pikachu')
console.log(pokemon);
