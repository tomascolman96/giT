var express = require('express');
var path = require('path');
var session = require('express-session'); 
var app = express();

// Configuración de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(session({
  secret: 'clave_secreta_transportes',
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Tus rutas
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;