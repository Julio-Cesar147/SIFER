const { Router } = require('express')
const productController = require('../../controllers/products/product.controller');
const { upload } = require('../../config/multer')

const productRouter = Router()

productRouter.post('/register', upload.single('image'), productController.register);
productRouter.get('/', [], productController.getAll)
productRouter.get('/:id', [], productController.getId)
productRouter.put('/:id', [], productController.update)
productRouter.delete('/:id', [], productController.remove)


module.exports = {
    productRouter
}