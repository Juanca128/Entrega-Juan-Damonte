var express = require('express');
var router = express.Router();
var usuariomodel_1 = require('./../../models/usuariomodel');

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout',
        persona: req.session.nombre
    });
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {

    try {
        var usuario = req.body.usuario; //captura nombre de usuario del hbs
        var password = req.body.password; //captura contraseña del hbs
        //console.log(password);

        var data = await usuariomodel_1.ordenpornombreypass(usuario, password); //ingreso los valores usuario y password en la función definida en usuariomodel1.js para 
        //buscar una coincidencia entre datos capturados y datos en la tabla 
        //console.log(usuario_1);       


        if (data != undefined) { //si data está definido
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;  //en esta linea asigno el valor de "usuario" a "nombre", que será luego utilizado en novedades.hbs
            res.redirect('/admin/novedades');

        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    }
    catch (error) {
        console.log(error);
    }

});


module.exports = router;