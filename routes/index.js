var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    nombreCompleto: 'Norkis Camila Isea Macias',
    cedula: '30790230',
    seccion: 'Sección "3"'
  });
});

module.exports = router;

