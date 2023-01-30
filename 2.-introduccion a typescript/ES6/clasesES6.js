;(() => {
    class Avenger{
        constructor(name,power){
            this.name = name;
            this.power = power;
        }
    }

    class Flyavenger{
        
    }

    const avenger = new Avenger('iron man','super machine')

    console.log(avenger);
})()