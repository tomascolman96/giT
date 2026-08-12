var express = require('express');
var path = require('path');
var session = require('express-session');
var cors = require('cors'); 
var pool = require('./bd'); 

var novedadesRouter = require('./routes/admin/novedades');
var loginRouter = require('./routes/admin/login');
var apiRouter = require('./routes/api');

var fileUpload = require('express-fileupload');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'ClaveSuperSecretaDeSession',
  resave: false,
  saveUninitialized: true
}));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


app.use('/admin/login', loginRouter);
app.use('/admin/novedades', novedadesRouter);


app.use('/api', cors(), apiRouter); 

pool.query("SELECT * FROM empleados").then(function(resultados) {
    console.log(resultados);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

module.exports = app;