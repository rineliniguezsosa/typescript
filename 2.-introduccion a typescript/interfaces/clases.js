"use strict";
;
(() => {
    class Mutante {
        constructor(nombre, realname, edad) {
            this.nombre = nombre;
            this.realname = realname;
            this.edad = edad;
        }
        getpower(id) {
            return `${this.nombre}  ${this.realname}`;
        }
    }
})();
