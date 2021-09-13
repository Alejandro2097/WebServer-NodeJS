const http = require('http');


http.createServer((req, res) =>{
    console.log(req);

    //res.writeHead(200, {'Content-Type' : 'application/json'});
    res.setHeader('Content-Disposition', 'attachmen; filename=lista.csv')
    res.writeHead(200, {'Content-Type' : 'application/csv'});
    const persona = {
        id: 1,
        nombre: 'Alejandro'
    }

    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan');
    res.write('4,  Pedro');
    res.end();
})
.listen(3200);
console.log('Escuchando el puerto 3200' );