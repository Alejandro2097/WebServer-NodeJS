const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
 


hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
//Midelware funcion que se ejecuta antes de hacer otra cosa.
//Servir contenido estatico 
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Alejandro Huertas',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Alejandro Huertas ',
        titulo: 'Curso de Node '
    });
});
 
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Alejandro Huertas ',
        titulo: 'Curso de Node '
    });
});
 
app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta.')
});
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});