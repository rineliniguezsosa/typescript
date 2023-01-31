;(() => {
    // INTERFACES EN LAS CLASES
    interface Xmen{
        nombre:string,
        realname:string,
        getpower(id:number):string,
    }

    class Mutante implements Xmen{
        constructor(public nombre:string,public realname:string){

        }
        getpower(id: number): string {
            return `${this.nombre}  ${this.realname}`
        }
    }
})()