const productService = require('../../services/products/product.service');


const register = async (req, res) => {
    try {
        const { idProduct, name, description, sku, selling_price, model, minimum_stock, maximum_stock, status, created, brand, category, unit } = req.body

        const product = await productService.registerProduct({ idProduct, name, description, sku, selling_price, model, minimum_stock, maximum_stock, status, created, brand, category, unit })

        res.status(201).json({ message: 'Product registered successfully', product })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error.message}` })
    }
};

//Obtener todos los productos
const getAll = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: `${error.message}` });
    }
};

//Obtener un producto por Id
const getId = async (req, res) => {
    try {
        const { id } = req.params; // ID pasado como parámetro en la URL
        const product = await productService.getProductId(id);
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: `${error.message}` });
    }
};

//Actualizar un producto
const update = async (req, res) => {
    try {
        const { id } = req.params; // ID pasado como parámetro
        const payload = req.body; // Datos a actualizar
        const message = await productService.updateProduct(id, payload);
        res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: `${error.message}` });
    }
};

//Eliminar un producto
const remove = async (req, res) => {
    try {
        const { id } = req.params; // ID pasado como parámetro en la URL
        const message = await productService.deleteProduct(id);
        res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: `${error.message}` });
    }
};

module.exports = {
    register,
    getAll,
    getId,
    update,
    remove
}
