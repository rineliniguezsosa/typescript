(()=>{
    abstract class Mutante{
        constructor(public name:string,public realname:string){

        }
    }

    class Xmen extends Mutante{}
    class Villan extends Mutante{}

    const wolverin:Mutante = new Xmen('wolverin','logan') 
    const magneto = new Villan('magneto','magnus')
    console.log(wolverin);
    console.log(magneto);
    
    
})()