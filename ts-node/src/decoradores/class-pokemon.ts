function checkpokemonId(){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        const originalMethod = descriptor.value
    }
}


export class Pokemon{
    public publicApi:string = 'http://pokeapi.co'
    constructor(public name:string){
        //UN DECORADOR ES UNA FUNCION QUE SE EJECUTA EN LA EJECUCION DE LA TRANSPILACION
    }
    @checkpokemonId()
    savepokemon(id:number):void{
        console.log(`el pokemon se guardo en DB ${ id }`)
    }

}