const express = require('express')
const app = express()

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send({'bienvenida':'hello world'})
})

app.listen(PORT,()=>{
    console.log(`Èl servidor esta escuchando los cambios en http://localhost:${PORT}`)
})