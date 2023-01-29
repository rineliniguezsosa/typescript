"use strict";
(function () {
    var fullname = function (name, firstname, lastname) {
        return "Su nombre completo es: " + name + " " + firstname + " " + lastname;
    };
    var data = fullname('rinel', 'rinel', 'iñiguez');
    console.log(data);
})();
