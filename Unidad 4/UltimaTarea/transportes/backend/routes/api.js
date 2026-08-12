var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');


router.get('/novedades', async function (req, res, next) {
  try {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
      if (novedad.img_id) {
        const imagen = cloudinary.url(novedad.img_id, {
          width: 960,
          height: 200,
          crop: 'fill'
        });
        return {
          ...novedad,
          imagen
        };
      } else {
        return {
          ...novedad,
          imagen: ''
        };
      }
    });

    res.json(novedades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Error al obtener las novedades' });
  }
});


router.post('/contacto', async function (req, res, next) {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    const mailOptions = {
      to: 'contacto@transportesx.com',
      subject: 'Contacto desde la web',
      html: `${nombre} se contactó a través de la web. <br>
             Email: ${email} <br>
             Teléfono: ${telefono || 'No indicado'} <br>
             Mensaje: ${mensaje}`
    };

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transport.sendMail(mailOptions);

    res.status(201).json({
      error: false,
      message: 'Mensaje enviado correctamente'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: 'Ocurrió un error al enviar el mensaje'
    });
  }
});

module.exports = router;