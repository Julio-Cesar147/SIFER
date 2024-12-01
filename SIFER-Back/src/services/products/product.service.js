const { Product, Brand, Category, Unit, ReservationDetail } = require('../../models/models')
const sequelize = require('../../config/database')


//Crear producto
const registerProduct = async (payload) => {
    if (!payload.name || !payload.description || !payload.sku || !payload.price || !payload.model || !payload.stock || !payload.stockMin || !payload.stockMax || !payload.image || !payload.brand || !payload.category || !payload.unit)
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
            let brand = await Brand.findOne({
                where: { brand: payload.brand },
                //transaction: transaction
            })

            if (!brand) {
                brand = await Brand.create({
                    brand: payload.brand
                },{
                    transaction: transaction
                })
            }

            let category = await Category.findOne({
                where: { category: payload.category },
                //transaction: transaction
            })

            if (!category) {
                category = await Category.create({
                    category: payload.category
                },{
                    transaction: transaction
                })
            }

            const user = await Product.create({
                //idProduct: payload.idProduct,
                name: payload.name,
                description: payload.description,
                sku: payload.sku,
                selling_price: payload.price,
                model: payload.model,
                stock: payload.stock,
                minimum_stock: payload.stockMin,
                maximum_stock: payload.stockMax,
                image: payload.image,
                //status: payload.status,
                //created: payload.created,
                brand: brand.idBrand,
                category: category.idCategory,
                unit: payload.unit

            },{
                transaction: transaction
            });

            /*wait Unit.create({
                unit: payload.Unit
            },{
                transaction: transaction
            })*/
    
            return 'Product registered successfully';
        });

        return result;
    } catch (error) {
        throw new Error('Failed to register product')
    } 
};

// Obtener todos los productos
const getProducts = async () => {
    // Obtener todos los productos
    const products = await Product.findAll();

    // Iterar sobre cada producto
    const productsWithStock = await Promise.all(products.map(async (product) => {
        // Obtener la cantidad total reservada para el producto
        const reservedQuantity = await ReservationDetail.sum('reserved_quantity', {
            where: {
                product: product.idProduct
            }
        });

        // Si no hay reservas, setear reservedQuantity a 0
        const reserved = reservedQuantity || 0;

        // Calcular el stock disponible
        const availableStock = product.stock - reserved;

        // Retornar el producto con stock disponible, reservado y demás atributos del producto
        return {
            idProduct: product.idProduct,
            name: product.name,
            description: product.description,
            sku: product.sku,
            selling_price: product.selling_price,
            model: product.model,
            stock: product.stock,
            minimum_stock: product.minimum_stock,
            maximum_stock: product.maximum_stock,
            status: product.status,
            created: product.created,
            brand: product.brand,
            category: product.category,
            unit: product.unit,
            availableStock,       // Stock disponible calculado
            reserved              // Lo que está apartado (reservado)
        };
    }));

    return productsWithStock;  // Retornar la lista de productos con sus stocks
};

// Obtener producto por Id
const getProductId = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Product not found');

    // Obtener la cantidad total reservada para el producto
    const reservedQuantity = await ReservationDetail.sum('reserved_quantity', {
        where: {
            product: id
        }
    });

    // Si no hay reservas, setear reservedQuantity a 0
    const reserved = reservedQuantity || 0;

    // Calcular el stock disponible
    const availableStock = product.stock - reserved;

    
    return {
        idProduct: product.idProduct,
        name: product.name,
        description: product.description,
        sku: product.sku,
        selling_price: product.selling_price,
        model: product.model,
        stock: product.stock,
        minimum_stock: product.minimum_stock,
        maximum_stock: product.maximum_stock,
        status: product.status,
        created: product.created,
        brand: product.brand,
        category: product.category,
        unit: product.unit,
        availableStock,       // Stock disponible calculado
        reserved              // Lo que está apartado (reservado)
    };
};



//Actualizar un producto
const updateProduct = async(id, payload) => {
    const product = await Product.findByPk(id);
    if(!product) throw new Error('Product not found');

    await product.update({
        name: payload.name,
        description: payload.description,
        sku: payload.sku,
        selling_price: payload.selling_price,
        model: payload.model,
        stock: payload.stock,
        minimum_stock: payload.minimum_stock,
        maximum_stock: payload.maximum_stock,
        status: payload.status,
        brand: payload.brand,
        category: payload.category,
        unit: payload.unit
    });

    await Brand.create({
        brand: payload.brand
    },{
        transaction: transaction
    })

    await Category.create({
        category: payload.Category
    },{
        transaction: transaction
    })

    await Unit.create({
        unit: payload.Unit
    },{
        transaction: transaction
    })

    return 'Product updated successfully';
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