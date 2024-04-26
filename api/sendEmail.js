/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const env = require("dotenv");

const app = express();
const port = 3201;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

env.config()

app.post('/api/sendEmail', (req, res) => {
    const { email, title, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GMAIL_KEY,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.GMAIL,
        subject: `Nova mensagem: ${title}`,
        text: `Mensagem de: ${email}\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            return res.status(500).send('Erro ao enviar e-mail');
        }
        res.send('Mensagem enviada com sucesso');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
