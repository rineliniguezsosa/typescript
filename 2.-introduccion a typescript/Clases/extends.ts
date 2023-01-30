;(() => {
    class Avenger{
        constructor(public name:string,public realname:string){
            
        }

        private getfullname(){
            return `${this.name}  ${this.realname}`
        }
    }

    class Xmen extends Avenger{
        constructor(name:string,realname:string,public isMutant:boolean){
            super(name,realname)
        }
    }

    const wolverin:Xmen = new Xmen('wolverin','logan',true)

    console.log(wolverin);
    
})()