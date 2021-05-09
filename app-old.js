const http = require('http');

http.createServer( ( req, res ) => {
  console.log(req );

    res.setHeader('Content-Disposition', 'attachment; filename=listaPrueba.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'});

    res.write(' id, nombre\n' );
    res.write(' 1, maria\n' );
    res.write(' 2, carlos\n' );
    res.write(' 3, juan\n' );
    res.write(' 4, pedro\n' );
    res.end();
})
.listen(4200);



console.log('escuchando en el puerto 4200');