"use strict";
;
(function () {
    var greet = function (name) { return "Hola " + name; };
    var save = function () { return 'save the world'; };
    var suma = function (num, num2) { return num + num2; };
    var mifuncion; //pasar referencias
    mifuncion = greet;
    console.log(mifuncion('rinel'));
    mifuncion = save;
    console.log(mifuncion());
    mifuncion = suma;
    console.log(mifuncion(10, 2));
})();
