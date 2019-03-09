const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public')); // esto sirve el contenido publico a la web
/* 
app.get('/', (req, res) => {
    let salida = {
        nombre: 'Israel',
        edad: 30,
        url: req.url
    }
    res.send(salida);
}); */

app.listen(3000, () => {
    console.log('Escuchando en puerto 3000');
});