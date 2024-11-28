const sequelize = require('../../config/database')
const { User, Product, Reservation, ReservationDetail, History, PurchaseDetail } = require('../../models/models')
const { v4: uuidv4 } = require('uuid')
const { sendEmail } = require('../../config/email')

const reserved = async (idUser, products) => {
    if (!idUser || !Array.isArray(products) || products.length === 0)
        throw new Error('Missing fields or no products')
    
    const code = uuidv4().split('-')[0]

    try {
        const result = await sequelize.transaction(async (transaction) => {
            const reservation = await Reservation.create({
                code: code,
                user: idUser
            },{
                transaction: transaction
            })

            const user = await User.findOne({
                where: { idUser: idUser },
                transaction: transaction
            })

            let productDetailsHTML = ''

            for (const product of products){
                const { sku, reserved } = product
                
                const productExists = await Product.findOne({
                    where: { sku: sku },
                    transaction: transaction
                })

                if (!productExists)
                    throw new Error('Cannot proceed because a product does not exist')

                if (reserved > productExists.stock)
                    throw new Error(`Insufficient stock for the product ${productExists.name}`)

                await ReservationDetail.create({
                    reserved_quantity: reserved,
                    reserved: reservation.idReservation,
                    product: productExists.idProduct
                },{
                    transaction: transaction
                })

                productDetailsHTML += `<li><strong>Producto:</strong> ${productExists.name} (SKU: ${sku}) - <strong>Cantidad:${reserved}</strong> ${reserved}</li>`

            }
            
            // Aqui en esta parte mandar el correo al cliente que aparto
            const send = sendEmail(user, code, productDetailsHTML)

            if (!send)
                throw new Error('Error sending email')

            return message = 'Successful reservation, a receipt has been sent to your e-mail address'
        })

        return result
    } catch (error) {
        throw new Error('Failed to make the reservation')
    }
}

const collection = async (idUser, sales,  products, code) => {
    if (!idUser || !sales || !Array.isArray(products) || products.length === 0)
        throw new Error('Missing fields or no products')

    try {
        const result = await sequelize.transaction(async (transaction) => {
            const history = await History.create({
                total_sales: sales,
                seller: idUser
            },{
                transaction: transaction
            })

            for (const product of products){
                const { sku, sales_quantity } = product
                
                const productExists = await Product.findOne({
                    where: { sku: sku },
                    transaction: transaction
                })

                if (!productExists)
                    throw new Error('Cannot proceed because a product does not exist')

                if (sales_quantity > productExists.stock)
                    throw new Error(`Insufficient stock for the product ${productExists.name}`)

                await PurchaseDetail.create({
                    sales_quantity: sales_quantity,
                    record: history.idHistory,
                    product: productExists.idProduct
                },{
                    transaction: transaction
                })

                await productExists.update({
                    stock: productExists.stock - sales_quantity
                },{
                    transaction: transaction
                })
            }

            if (code) {
                const reservation = await Reservation.findOne({
                    where: { code: code }
                })

                if (!reservation) {
                    throw new Error('Reservation not found')
                } else {
                    await reservation.update({
                        status: 3
                    },{
                        transaction: transaction
                    })
                }
            }

            return message = 'Successful collection'           
        })

        return result
    } catch (error) {
        throw new Error('Failed to make the collection')
    }   
}

module.exports = {
    reserved,
    collection
}