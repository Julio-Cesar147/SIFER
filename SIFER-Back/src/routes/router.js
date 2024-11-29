const { authRouter } = require('../routes/auth/auth.routes')
const { reservedRouter } = require('../routes/reserved/reserved.routes')
const { productRouter } = require('../routes/products/product.routes')
const { adminRouter } = require('../routes/admin/admin.routes')


module.exports = {
    authRouter,
    reservedRouter,
    productRouter,
    adminRouter
}

