(()=>{
    const fullname = (name: string,firstname:string,lastname?:string):string =>{
        return `Su nombre completo es: ${name} ${firstname} ${lastname || ''}`
    }

    const data = fullname('rinel','rinel')

    console.log(data);
})()