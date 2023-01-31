//CREANDO UN NAMESPACE
// LOS NAMESPACES, EXISTEN PARA AYUDARNOS EN LA RE UTILIZACIÓN 
// DE NUESTRAS VARIABLES, CONSTANTES Y MÉTODOS.
namespace validatetext {
    export const validatetext = (text:string):boolean => {
        return text.length > 3 ? true : false;
    }

     export const validateDate = (myDate:Date):boolean => {
        return isNaN(myDate.valueOf()) ? false : true;
    }
}

console.log(validatetext.validatetext('rinel'));
