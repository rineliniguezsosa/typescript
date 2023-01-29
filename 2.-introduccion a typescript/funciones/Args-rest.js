"use strict";
;
(function () {
    var fullname = function (name) {
        var fullname = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fullname[_i - 1] = arguments[_i];
        }
        return "Su nombre completo es: " + name + " " + fullname.join(' ');
    };
    var data = fullname('rinel', 'rinel', 'sosa');
    console.log(data);
})();
