const express = require('express')
const app = express()

const PORT = 3000;

app.listen(()=>{
    console.log(`Èl servidor esta escuchando los cambios en http://localhost:${PORT}`)
})