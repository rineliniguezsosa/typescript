//CREANDO UN NAMESPACE

namespace validatetext {
    const validatetext = (text:string):boolean => {
        return text.length > 3 ? true : false;
    }

    const validateDate = (myDate:Date):boolean => {
        return isNaN(myDate.valueOf()) ? false : true;
    }
}