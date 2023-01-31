(()=>{
    interface heroes  {
        nombre:string,
        edad:number,
        poderes:string[],
        getnombre?:()=> string //TIPO METODO
    }

    let flash: heroes = {
        nombre:'barry allen',
        edad:25,
        poderes:['super velocidad','viajar en el tiempo']
    }

    let superman:heroes = {
        nombre:'clark kent',
        edad:22,
        poderes:['super fuerza','volar','super velocidad','vision rayos x'],
        getnombre(){
            return this.nombre;
        }
    }

    console.log(superman.nombre);
})()