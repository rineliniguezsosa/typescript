;(() => {
    function sumar(a:number,b:number):number{
        return a + b
    }

    var contar = (...heroes:string[]):number => {
        return heroes.length;
    }
    var superheroes:string[] = ['flash','arrow','super man','linterna verde']
    console.log(contar(...superheroes));

    //parametros por defecto
    const llamarbatman = (llamar?:boolean):void =>{
        if(llamar){
            console.log("batiseñal activada"); 
        }
    }

    llamarbatman()

    const unirheroes = (...personas:string[]):string =>{
        return personas.join(',')
    }
    
    //Tipo funcion
    const nohacenada = (numero:number,texto:string,booleano:boolean,arreglo:string[]):void => {}

    //crear el tipo de funcion que nohacenada
    let nohacenadatampoco:Function;

    nohacenadatampoco = nohacenada;

    nohacenadatampoco()



})()