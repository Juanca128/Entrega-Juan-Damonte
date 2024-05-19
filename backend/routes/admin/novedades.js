var express = require('express');
var router = express.Router();
var modelo_novedades = require('../../models/modelo_novedades');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); //ver si ese nombre está bien
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {

    var novedades = await modelo_novedades.getnovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, { //En esta linea, se busca en el servidor cloudinary la imagen correspondiente al id asignado desde la base de datos              
                width: 100,                                   //y se lo asigna a la constante "imagen"
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }

        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }

    });
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});

router.get('/nueva', (req, res, next) => {

    res.render('admin/nueva', {
        layout: 'admin/layout'

    })

});

router.post('/nueva', async (req, res, next) => {

    try {

        var img_id = '';

        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;

        }

        if (req.body.titulo != "" && req.body.cuerpo != "") {
            await modelo_novedades.insertarnovedad({
                ...req.body,
                img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/nueva', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargó la novedad'
        });
    }

});

router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id; //extrae el parámetro "id" de la fila seleccionada desde el hbs
    
    let novedad = await modelo_novedades.getnovedporid(id);
    if(novedad.img_id) {
        await (destroy (novedad.img_id));
    }
    
    await modelo_novedades.borrarnovedad(id);
    res.redirect('/admin/novedades')
});

router.get('/modificar/:id', async (req, res, next) => {

    var id = req.params.id;
    console.log(id);

    var novedad = await modelo_novedades.getnovedporid(id);


    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

router.post('/modificar', async (req, res, next) => {

    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }

        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }


        var obj = {   // obj es un array

            titulo: req.body.titulo,
            cuerpo: req.body.cuerpo,
            tipo: req.body.tipo,
            img_id

        }

        await modelo_novedades.updatebyID(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch (error) {

        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'no se modificó la novedad'
        })
    }
})

module.exports = router;