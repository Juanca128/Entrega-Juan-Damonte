var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/show', {           //ver redirect
        layout: 'admin/layout'
    });
});


module.exports = router;