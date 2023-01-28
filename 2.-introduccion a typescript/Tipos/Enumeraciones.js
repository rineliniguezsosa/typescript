"use strict";
(function () {
    var Audiolevel;
    (function (Audiolevel) {
        Audiolevel[Audiolevel["max"] = 10] = "max";
        Audiolevel[Audiolevel["medium"] = 5] = "medium";
        Audiolevel[Audiolevel["mini"] = 2] = "mini";
    })(Audiolevel || (Audiolevel = {}));
    var data = Audiolevel.max;
    console.log(data);
})();
