process.loadEnvFile()
const { configSendEmail } = require('../utils/functions')

const sendEmail = (user, code, productDetailsHTML) => {
    const mailOptions = {
        from: process.env.EUSER,
        to: user.email,
        subject: 'Informacion sobre su apartado',
        html: `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Informacion Apartado</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            font-size: 24px;
                            font-weight: bold;
                            color: #333333;
                            margin-bottom: 20px;
                        }
                        .code-block {
                            text-align: center;
                            font-size: 20px;
                            font-weight: bold;
                            background-color: #e8f0fe;
                            padding: 10px;
                            border-radius: 5px;
                            color: #1a73e8;
                            margin: 20px 0;
                        }
                        .info-list {
                            list-style-type: none;
                            padding: 0;
                            margin: 0;
                        }
                        .info-list li {
                            background-color: #f9f9f9;
                            padding: 10px;
                            border-bottom: 1px solid #dddddd;
                            color: #555555;
                        }
                        .info-list li:last-child {
                            border-bottom: none;
                        }
                        .footer {
                            text-align: center;
                            font-size: 12px;
                            color: #aaaaaa;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">Este es tu CODIGO de reserva:</div>
                        <div class="code-block">${code}</div>
                        <ul class="info-list">
                            <li><strong>Nombre:</strong> ${user.name}</li>
                            <li><strong>Fecha en que se realizo:</strong> ${new Date().toLocaleDateString()}</li>
                            <li><strong>Productos reservados:</strong></li>
                            ${productDetailsHTML} <!-- Lista de productos -->
                        </ul>
                        <div class="footer">
                            Este correo solo es informativo. Favor de no responder.
                        </div>
                    </div>
                </body>
            </html>
        `
    }

    configSendEmail(mailOptions)
}

module.exports = {
    sendEmail
}