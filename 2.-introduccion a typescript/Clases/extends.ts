;(() => {
    class Avenger{
        constructor(public name:string,public realname:string){
            
        }

        private getfullname(){
            return `${this.name}  ${this.realname}`
        }
    }

    class Xmen extends Avenger{

    }

    const wolverin:Xmen = new Xmen('wolverin','logan')

    console.log(wolverin);
    
})()