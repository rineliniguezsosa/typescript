;(() => {
    type superheroe = {
        nick:string,
        ironman:string,
        activo:boolean,
        poder:number

    }
    const avenger:superheroe = {
        nick:'samuel l.jackson',
        ironman:'robert downey jr',
        activo:true,
        poder:150.009
    }

    const printAvenger = ({ironman}:superheroe) => {
        console.log(ironman);
        
    }

    printAvenger(avenger)

    const { poder } = avenger

    console.log(poder);

    //desestructuracion de arreglos
    const myheroes:string[] = ['spider-man','thor','hulk','cap america']

    const [,,hulk] = myheroes;

    console.log(hulk);
    
    
})()