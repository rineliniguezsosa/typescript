;(() => {
    class Avenger{
        private name:string;
        private team:string;
        public realname:string;
        static avgname:number = 35;
        constructor(name:string,team:string,realname:string){
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
    }
})()