const http = require('http');


http.createServer((req, res) =>{
    res.write('Hola mundo');
    res.end();
})
.listen(3200);
console.log('Escuchando el puerto 3200' );