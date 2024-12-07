const { Router } = require('express')
const productController = require('../../controllers/products/product.controller');
const { upload } = require('../../config/multer')
const { protectedEndpoint } = require('../../config/jwt')

const productRouter = Router()

productRouter.post('/register', protectedEndpoint('Administrador'), upload.single('image'), productController.register);
productRouter.get('/', [], productController.getAll)
productRouter.get('/:id', [], productController.getId)
productRouter.put('/:id', protectedEndpoint('Administrador'), productController.update)
productRouter.delete('/:id', [], productController.remove)


module.exports = {
    productRouter
}