(()=>{
    abstract class Mutante{
        constructor(public name:string,public realname:string){

        }
    }

    class Xmen extends Mutante{
        salvarmundo(){
            return "Mundo a salvo"
        }
    }
    class Villan extends Mutante{
        conquistarmundo(){
            return "mundo conquistado"
        }
    }

    const wolverin = new Xmen('wolverin','logan') 
    const magneto = new Villan('magneto','magnus')
    console.log(wolverin.salvarmundo());
    console.log(magneto.conquistarmundo());
    
    
})()