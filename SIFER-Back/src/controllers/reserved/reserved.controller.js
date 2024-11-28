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

const getReservation = async (req, res) => {
    try {
        const code = req.params.code

        const reservation = await reservedService.getReservation(code)

        res.status(200).json({ reservation: reservation })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })
    }
}

const getAllReservations = async (req, res) => {
    try {
        const reservations = await reservedService.getAllReservations()

        res.status(200).json({ reservations: reservations })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })
    }
}

const cancelReservation = async (req, res) => {
    try {
        const idReservation = req.params.reservation

        const message = await reservedService.cancelReservation(idReservation)

        res.status(200).json({ message: message })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })
    }
}

module.exports = {
    reserved,
    collection,
    getReservation,
    getAllReservations,
    cancelReservation
}