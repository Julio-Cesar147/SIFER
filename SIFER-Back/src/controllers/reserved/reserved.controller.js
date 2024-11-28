const reservedService = require("../../services/reserved/reserved.service")

const reserved = async (req, res) => {
    try {
        const { idUser, products } = req.body

        const result = await reservedService.reserved(idUser, products)

        res.status(200).json({ message: result })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })
    }
}

const collection = async (req, res) => {
    try {
        const { idUser, sales, products, code } = req.body

        const result = await reservedService.collection(idUser, sales, products, code)

        res.status(200).json({ message: result })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })
    }
}

module.exports = {
    reserved,
    collection
}