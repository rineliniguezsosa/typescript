;(() => {
    class Avenger{
        constructor(name,power){
            this.name = name;
            this.power = power;
        }
    }

    const avenger = new Avenger('iron man','super machine')

    console.log(avenger);
})()