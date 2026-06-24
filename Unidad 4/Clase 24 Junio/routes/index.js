var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nombre: req.session.nombre });
});


router.post('/ingresar', function(req, res, next) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre; 
  }
  res.redirect('/'); 
});


router.get('/salir', function(req, res, next) {
  req.session.destroy(); 
  res.redirect('/'); 
});

module.exports = router;