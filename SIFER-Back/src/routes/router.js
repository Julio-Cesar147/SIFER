const { authRouter } = require('../routes/auth/auth.routes')
const { reservedRouter } = require('../routes/reserved/reserved.routes')
const { adminRouter } = require('../routes/admin/admin.routes')
const { occupationsRouter } = require('../routes/occupations/occupations.routes')

module.exports = {
    authRouter,
    reservedRouter,
    adminRouter,
    occupationsRouter
}
