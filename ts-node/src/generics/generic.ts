// UN GENERIC ES UNA FUNCION QUE SIMPLEMENTE OBTIENE CUALQUIER ARGUMENTO
export const Objectgeneric = (arg:any):void=>{
    console.log(arg);
    
}

//CONVERTIR UNA FUNCION EN GENERICA PARA LA AYUDA DEL TIPADO DE DATOS
export function genericFunction<T>(arg:any){
    return arg
}