;(() => {
    class Avenger{
        constructor(name,power){
            this.name = name;
            this.power = power;
        }
    }

    class Flyavenger extends Avenger{
        constructor(name,power){
            super(name,power)
            this.vuela = true;
        }
    }

    const avenger = new Avenger('iron man','super machine')
    const flyavenger = new Flyavenger('falcon','cuerpo a cuerpo')

    console.log(flyavenger);
})()