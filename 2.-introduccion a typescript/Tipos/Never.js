"use strict";
(function () {
    var error = function (msg) {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    var data = error("error");
    console.log(data);
})();
