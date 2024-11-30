process.loadEnvFile()
const express = require('express')
const cors = require('cors')

//En esta parte se mandan a traer las rutas del archivo router, por lo que se importa de ese archivo
//const {} = require()


const { authRouter, reservedRouter, adminRouter, productRouter, occupationsRouter } = require('../routes/router')


const app = express()

app.set('port', process.env.PORT || 3001)

app.use(cors({origins: '*'}))
app.use(express.json({limit: '50mb'}))
app.use('/uploads', express.static('../uploads'))

app.get('/', (request, response) => {
    response.send('Esto es lo que viene a ser la APIRest para una ferreteria')
})

/**
 * Endpoints
 * 
 * En esta parte se pone lo que son los endpoints que maneja la API
 * se ponen de la siguiente manera:
 * 
 * app.use('lo que es el endpoint', la ruta)
 * 
 * Por ruta se entiende que son las que se traen del archivo router,
 * las cuales se importaron mas arriba
 */

app.use('/api/auth', authRouter)
app.use('/api/reserved', reservedRouter)
app.use('/api/products', productRouter)
app.use('/api/admin', adminRouter)
app.use('/api/occupation', occupationsRouter)

module.exports = {
    app
}