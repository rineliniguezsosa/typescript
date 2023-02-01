import { Objectgeneric,genericFunction } from "./generics/generic";
import { villan } from './interfaces/Villan';
import { hero } from './interfaces/Hero'

console.log(Objectgeneric("12233").charAt(2));
console.log(Objectgeneric(123));
console.log(Objectgeneric([1,2,3,true]));


console.log(genericFunction(123).toFixed(1));
console.log(genericFunction(new Date()).getMonth());
console.log(genericFunction('Hola mundo rinel').toUpperCase());

//CRERANDO EL OBJETO DEADPOOL
const deadpool = {
    name:'dead pool',
    realname:'wade winston wilson',
    dangerlevel:150
}

console.log(genericFunction<villan>(deadpool).dangerlevel)








