"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var fuerzaFlash = 5;
    var fuerzaSuperman = 100;
    var fuerzaBatman = 1;
    var fuerzaAcuaman = 0;
    var superheroes;
    (function (superheroes) {
        superheroes[superheroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        superheroes[superheroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        superheroes[superheroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        superheroes[superheroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(superheroes || (superheroes = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
