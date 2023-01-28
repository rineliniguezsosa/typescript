(()=>{
    const error = (msg:string):(never|number) =>{
        if(false){
            throw new Error(msg)
        }
        return 1;
    }

    const data = error("error")
    console.log(data);
    
})()