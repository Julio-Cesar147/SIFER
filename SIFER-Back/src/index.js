const { app } = require('./config/server')

const main = () => {
    try {
        app.listen(app.get('port'))
        console.log(`Running in http://localhost:${app.get('port')}/`)
    } catch (error) {
        console.log(error)
    }
}

main()