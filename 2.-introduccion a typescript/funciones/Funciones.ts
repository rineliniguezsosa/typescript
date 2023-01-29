(()=>{
    const heroe:string = 'flash';

    const returnnameheroe = ():string =>{
        return heroe;
    }

    const power = ():string => {
        return 'velocidad'
    }
    const data = power()
    console.log(typeof(data));
})()