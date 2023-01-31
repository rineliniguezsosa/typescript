;(() => {

    interface Cliente {
        nombre:string,
        edad?:number,
        adress?: Adress,
    }

    interface Adress {
        id:number,
        zip:string,
        city:string
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