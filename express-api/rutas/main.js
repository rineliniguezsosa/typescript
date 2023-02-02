const {response} = require('express')

const principal = (res = response) =>{
    res.send({'hola':'mundo'})
}


module.exports = principal