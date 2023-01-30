;(() => {
    class Avenger{
        constructor(public name:string,public realname:string){
            
        }

        protected getfullname(){
            return `${this.name}  ${this.realname}`
        }
    }

    class Xmen extends Avenger{
        constructor(name:string,realname:string,public isMutant:boolean){
            super(name,realname)
        }

        get fullname(){
            return `${this.name}`;
        }

        set fullname(name:string){
            this.name = name;
        }

        getfullnamefromAvenger(){
            return super.getfullname()
        }
    }

    const wolverin:Xmen = new Xmen('wolverin','logan',true)
    wolverin.fullname = 'rinel';
    console.log(wolverin.getfullnamefromAvenger());
    
})()