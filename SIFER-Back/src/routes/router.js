const { authRouter } = require('../routes/auth/auth.routes')
const { reservedRouter } = require('../routes/reserved/reserved.routes')
const { adminRouter } = require('../routes/admin/admin.routes')

module.exports = {
    authRouter,
    reservedRouter,
    adminRouter
}



