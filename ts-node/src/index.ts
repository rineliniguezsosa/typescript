import { getPokemon } from './generics/getpokemon';

getPokemon(1)
    .then( resp => console.log(resp))
    .catch( error => console.log(error))
    .finally( ()=> console.log('termino de consulta de la pokeapi'))
    