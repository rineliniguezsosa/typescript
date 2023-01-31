(()=>{
    abstract class Mutante{
        constructor(public name:string,public realname:string){

        }
    }

    class Xmen extends Mutante{}

    const wolverin:Mutante = new Xmen('wolverin','logan') 
    console.log(wolverin);
    
})()