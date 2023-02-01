// UN GENERIC ES UNA FUNCION QUE SIMPLEMENTE OBTIENE CUALQUIER ARGUMENTO
export const Objectgeneric = <T> (arg:T):T=>{
    return arg;
    
}

//CONVERTIR UNA FUNCION EN GENERICA PARA LA AYUDA DEL TIPADO DE DATOS
export function genericFunction<T>(arg:T):T{
    return arg
}