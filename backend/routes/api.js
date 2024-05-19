var express = require('express');
var router = express.Router();
var modelo_novedades = require('./../models/modelo_novedades');
var cloudinary = require('cloudinary').v2;

var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next){
    let novedades = await modelo_novedades.getnovedades();

    novedades = novedades.map(novedades =>{
        if(novedades.img_id){
            const imagen = cloudinary.url(novedades.img_id, {
                width:260,
                height: 200,
                crop: 'fill'
            });
            return{
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

router.post('/Contacto', async(req, res)=>{
    const mail = {
        to: 'jkcordoba@gmail.com',
        subject: 'Contacto web',
        html:`${req.body.nombre} se contactó a través de
        la web y quiere más información a este correo: 
        ${req.body.email} <br> Además, hizo el siguiente
        comentario: ${req.body.mensaje} <br> Su tel es:
        ${req.body.telefono}`

    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS

        }
    }) ;    

    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});



module.exports = router;