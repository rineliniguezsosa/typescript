;(() => {
    // NO UTILIZAR EL TIPO DE DATO ANY CON FRECUENCIA
    let avenger:any = 'Hola mundo!';

    console.log((avenger as string).charAt(0));

    avenger = 28.8934;
    
    console.log(<number>avenger.toFixed(2))
})()