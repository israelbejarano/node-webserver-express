const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public')); // esto sirve el contenido publico a la web

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Israel Bejarano Álvarez',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando en puerto 3000');
});