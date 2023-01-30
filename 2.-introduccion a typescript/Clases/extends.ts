;(() => {
    class Avenger{
        constructor(public name:string,public realname:string){
            
        }

        private getfullname(){
            return `${this.name}  ${this.realname}`
        }
    }
})()