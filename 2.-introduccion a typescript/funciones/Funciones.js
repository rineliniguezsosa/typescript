"use strict";
(function () {
    var heroe = 'flash';
    var returnnameheroe = function () {
        return heroe;
    };
    var power = function () {
        return 'velocidad';
    };
    var data = power();
    console.log(typeof (data));
})();
