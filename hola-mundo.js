var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(logger('dev'));

//rutas
app.get('/', function (req, res) {
  res.send('Hola mundo');
});



//{
//  "planets": [
//    {"id":"",
//    "nombre":"tierra"}
//   ]
//}

app.post('/planetas', function (req, res) {
  	var planets = req.body.planets; 
  	console.log("JS:req.body.planets" + req.body.planets);
  	planets.id = "111";
  	res.json(planets);
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('escuchando en el puerto 3000');

});