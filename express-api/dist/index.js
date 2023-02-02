"use strict";
var express = require('express');
var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send({ 'bienvenida': 'hello world' });
});
app.listen(PORT, function () {
    console.log("\u00C8l servidor esta escuchando los cambios en http://localhost:" + PORT);
});
