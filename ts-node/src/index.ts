import { getPokemon } from './generics/getpokemon';

getPokemon(1)
    .then( pokemon => console.log(pokemon.name))
    .catch( error => console.log(error))
    .finally( ()=> console.log('termino de consulta de la pokeapi'))
    