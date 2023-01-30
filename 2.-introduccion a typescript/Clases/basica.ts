;(() => {
    class Avenger{
        // private name:string;
        // private team:string;
        // public realname?:string;
        static avgname:number = 35;
        constructor(private name:string,private team:string,public realname?:string){
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
    }

    const antman:Avenger = new Avenger('ant-man','cap america')
    console.log(antman);
    
})()