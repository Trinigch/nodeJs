var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var app = express();

var port = process.env.PORT || 4200

app.get('/', function(req, res){
    res.json({mensaje:'¡Hola Mundo :D!'})
})
var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

app.delete('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)