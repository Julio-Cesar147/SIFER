process.loadEnvFile()
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

// Funcion para hashear la contrasenia
const hashPayload = async (payload) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(payload, salt)
}

// Funcion para compara hashes
const comparePayload = async (payload, hashedPayload) => {
    return await bcrypt.compare(payload, hashedPayload)
}

// Funcion que configura el envio de correo
const configSendEmail = async (mailOptions) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EHOST,
        port: process.env.EPORT,
        secure: false,
        auth: {
            user: process.env.EUSER,
            pass: process.env.EPASS
        },
        connectionTimeout: 6000,
        socketTimeout: 6000
    })

    return await transporter.sendMail(mailOptions)
}

module.exports = {
    hashPayload,
    comparePayload,
    configSendEmail
}