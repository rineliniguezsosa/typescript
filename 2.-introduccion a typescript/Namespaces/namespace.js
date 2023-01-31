"use strict";
//CREANDO UN NAMESPACE
// LOS NAMESPACES, EXISTEN PARA AYUDARNOS EN LA RE UTILIZACIÓN 
// DE NUESTRAS VARIABLES, CONSTANTES Y MÉTODOS.
var validatetext;
(function (validatetext_1) {
    validatetext_1.validatetext = (text) => {
        return text.length > 3 ? true : false;
    };
    validatetext_1.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(validatetext || (validatetext = {}));
console.log(validatetext.validatetext('rinel'));
