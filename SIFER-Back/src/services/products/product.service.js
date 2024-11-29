const { Product } = require('../../models/models')
const sequelize = require('../../config/database')

//Crear producto
const registerProduct = async (payload) => {
    if (!payload.idProduct || !payload.name || !payload.description || !payload.sku || !payload.selling_price || !payload.model || !payload.minimum_stock || !payload.maximum_stock || !payload.status || !payload.created || !payload.brand || !payload.category || !payload.unit)
        throw new Error('Missing fields')

    const duplicateProduct = await Product.findOne({
        where: {
            sku: payload.sku //se verifica si ya existe un producto con ese mismo sku
        }
    })

    if (duplicateProduct)
        throw new Error('Product with this SKU already exists')

    try {
        const result = await sequelize.transaction(async (transaction) => {
            const user = await Product.create({
                idProduct: payload.idProduct,
                name: payload.name,
                description: payload.description,
                sku: payload.sku,
                selling_price: payload.selling_price,
                model: payload.model,
                minimum_stock: payload.minimum_stock,
                maximum_stock: payload.maximum_stock,
                status: payload.status,
                created: payload.created,
                brand: payload.brand,
                category: payload.category,
                unit: payload.unit

            },{
                transaction: transaction
            });
    
            return 'Product registered successfully';
        });

        return result;
    } catch (error) {
        throw new Error('Failed to register product')
    } 
};

//Obtener todos los productos
const getProducts = async () =>{
    return await Product.findAll();
};

//Obtener producto por Id
const getProductId = async (id) => {
    const product = await Product.findByPk(id);
    if(!product) throw new Error('Product not found');
    return product;
};

//Actualizar un producto
const updateProduct = async(id, payload) => {
    const product = await Product.findByPk(id);
    if(!product) throw new Error('Product not found');

    await product.update(payload);//especificar lo que se va a actualizar
    return 'Product update successfully';
};

//Eliminar un producto
const deleteProduct = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Product not found');

    await product.destroy();
    return 'Product deleted successfully';
};

module.exports = {
    registerProduct,
    getProducts,
    getProductId,
    updateProduct,
    deleteProduct
}