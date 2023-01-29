"use strict";
;
(function () {
    function sumar(a, b) {
        return a + b;
    }
    var contar = function () {
        var heroes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            heroes[_i] = arguments[_i];
        }
        return heroes.length;
    };
    var superheroes = ['flash', 'arrow', 'super man', 'linterna verde'];
    console.log(contar.apply(void 0, superheroes));
    //parametros por defecto
    var llamarbatman = function (llamar) {
        if (llamar) {
            console.log("batiseñal activada");
        }
    };
    llamarbatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(',');
    };
    //Tipo funcion
    var nohacenada = function (numero, texto, booleano, arreglo) { };
    //crear el tipo de funcion que nohacenada
    var nohacenadatampoco;
    nohacenadatampoco = nohacenada;
    nohacenadatampoco();
})();
