;(() => {
    const greet = ( name:string ):string => `Hola ${name}`;
    const save = ():string => 'save the world'
    const suma = (num:number,num2:number):number=> num + num2;

    let mifuncion:Function; //pasar referencias

    mifuncion = greet 
    console.log(mifuncion('rinel'));

    mifuncion = save
    console.log(mifuncion())

    mifuncion = suma
    console.log(mifuncion(10,2));
    
    
})()