;(() => {
    const fullname = (name: string,...fullname:string[]):string =>{
        return `Su nombre completo es: ${name} ${fullname.join(' ')}`
    }

    const data = fullname('rinel','rinel','sosa')

    console.log(data);
})()