;(() => {
    //INTERFACES PARA LAS FUNCIONES
    interface Addtwonumbers {
        (a:number,b:number):number
    }

    let addtwonumber:Addtwonumbers;

    addtwonumber = (a:number,b:number) =>{
        return a + b;
    }

    console.log(addtwonumber(1,4));
    
})()