// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender:boolean,
  velocidadMaxima:number,
  acelear():void,
}
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Villan {
  reir?:boolean,
  comer?:boolean,
  llorar?:boolean
}
const guason: Villan = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villan ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface City{
  (cuidadanos:string[]):number
}
const ciudadGotica:City = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface persona {
  nombre:string,
  edad:number,
  sexo:string,
  estadoCivil:boolean,
  imprimirBIO():void
}
class Persona implements persona {
  constructor(
    public nombre:string,
    public edad:number,
    public sexo:string,
    public estadoCivil:boolean){}

  
  imprimirBIO(): void {
    console.log("me ejecute en consola  rinel");
    
  }

}