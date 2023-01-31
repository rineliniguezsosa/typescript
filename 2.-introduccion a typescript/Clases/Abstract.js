"use strict";
(() => {
    class Mutante {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
    }
    class Xmen extends Mutante {
        salvarmundo() {
            return "Mundo a salvo";
        }
    }
    class Villan extends Mutante {
        conquistarmundo() {
            return "mundo conquistado";
        }
    }
    const wolverin = new Xmen('wolverin', 'logan');
    const magneto = new Villan('magneto', 'magnus');
    console.log(wolverin.salvarmundo());
    console.log(magneto.conquistarmundo());
})();
