var express = require('express');
var router = express.Router();
var pool = require('../../bd'); 
var md5 = require('md5');





router.get('/', function(req, res, next) {
  res.render('admin/login', { 
    layout: 'admin/layout'     
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await pool.query('SELECT * FROM usuarios WHERE usuarios = ? AND password = ?', [usuario, md5(password)]);

    if (data.length > 0) {
      req.session.isLogged = true;
      req.session.usuario = data[0].usuarios;

      res.redirect('/admin/novedades'); 
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;