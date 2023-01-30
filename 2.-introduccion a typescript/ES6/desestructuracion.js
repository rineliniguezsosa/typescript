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
})();
