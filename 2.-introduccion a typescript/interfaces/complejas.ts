;(() => {

    interface Cliente {
        nombre:string,
        edad?:number
    }
    const cliente = {
        nombre:'rinel',
        edad:27
    }

    const client:Cliente ={
        nombre:'fernando',
        edad:24,
        adress:{
            id:234,
            zip:'KJY YHB',
            city:'chenku'
        }
    }
})()