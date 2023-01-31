"use strict";
;
(() => {
    class Avenger {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
        getfullname() {
            return `${this.name}  ${this.realname}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realname, isMutant) {
            super(name, realname);
            this.isMutant = isMutant;
        }
        get fullname() {
            return `${this.name}`;
        }
        set fullname(name) {
            this.name = name;
        }
        getfullnamefromAvenger() {
            return super.getfullname();
        }
    }
    const wolverin = new Xmen('wolverin', 'logan', true);
    wolverin.fullname = 'rinel';
    console.log(wolverin.getfullnamefromAvenger());
})();
