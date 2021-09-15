const express = require('express')
const app = express();
const port = 3000
 

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
    res.sendFile(__dirname + '/public/generic.html');
});
 
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
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