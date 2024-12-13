import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
    }

    const { email } = req.body;

    if (!email) {
    return res.status(400).json({ message: 'El correo es obligatorio' });
    }

    try {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.verify((error, success) => {
        if (error) {
            console.error('Error en conexión SMTP:', error);
        } else {
            console.log('SMTP conectado:', success);
        }
        });
        

    return res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
    console.error('Error al enviar el correo:', error);
    return res.status(500).json({ message: 'Error al enviar el correo' });
    }
}
