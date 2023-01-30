"use strict";
;
(() => {
    const avenger = {
        nick: 'samuel l.jackson',
        ironman: 'robert downey jr',
        activo: true,
        poder: 150.009
    };
    const printAvenger = ({ ironman }) => {
        console.log(ironman);
    };
    printAvenger(avenger);
    const { poder } = avenger;
    console.log(poder);
    //desestructuracion de arreglos
    const myheroes = ['spider-man', 'thor', 'hulk', 'cap america'];
    const [, , hulk] = myheroes;
    console.log(hulk);
})();
