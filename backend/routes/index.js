var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('admin/login'); //redirecciona directamente a admin/login desde localhost:3000
});

module.exports = router;
