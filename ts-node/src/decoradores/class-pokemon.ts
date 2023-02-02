function checkpokemonId(){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        console.log(target,propertyKey,descriptor)
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