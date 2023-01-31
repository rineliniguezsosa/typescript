"use strict";
;
(() => {
    class Avenger {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realname = realname;
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
        bio() {
            return `${this.name}`;
        }
        static getavgage() {
            return this.name;
        }
    }
    // private name:string;
    // private team:string;
    // public realname?:string;
    Avenger.avgname = 35;
    const antman = new Avenger('ant-man', 'cap america');
    // console.log(antman.bio()) imposible de acceder metodo private
    // console.log(Avenger.getavgage()) metodo static
    console.log(antman);
})();
