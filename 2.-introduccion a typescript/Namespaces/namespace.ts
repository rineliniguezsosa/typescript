//CREANDO UN NAMESPACE

namespace validatetext {
    const validatetext = (text:string):boolean => {
        return text.length > 3 ? true : false;
    }
}