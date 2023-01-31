"use strict";
(() => {
    let flash = {
        nombre: 'barry allen',
        edad: 25,
        poderes: ['super velocidad', 'viajar en el tiempo']
    };
    let superman = {
        nombre: 'clark kent',
        edad: 22,
        poderes: ['super fuerza', 'volar', 'super velocidad', 'vision rayos x'],
        getnombre() {
            return this.nombre;
        }
    };
    console.log(superman.nombre);
})();
