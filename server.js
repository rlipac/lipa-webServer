require('dotenv').config();
const express = require('express');
const  hbs = require('hbs');

const app = express();
const port = process.env.PORT;



// servir ocntenido estatico
// todo: require(hbs)
// Handlebars
app.set('view engine', 'hbs');//con ento renderisamos template hbs
hbs.registerPartials(__dirname + '/views/partials');



app.use( express.static('views'));
// app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.render('home', {
      nombre:'Richard Lipa',
      titulo:'Curso Node' 
  });

});


// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/views/home.hbs');

// });
  app.get('/generic', function (req, res) {
    res.render('generic', {
      nombre:'Richard Lipa',
      titulo:'Curso Node' 
  });

});

// app.get('/elements', function (req, res) {
//   res.sendFile(__dirname + '/public/elements.html');

// });
app.get('/elements', function (req, res) {
    res.render('elements', {
      nombre:'Richard Lipa',
      titulo:'Curso Node y Express' 
  });

});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(port);
console.log(`escuchando en el Puerto ${port}`);