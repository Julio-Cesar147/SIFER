const occupationsService = require('../../services/occupations/occupations.service')

const getAll = async (req, res) => {
    try {
        const occupations = await occupationsService.getAll()

        res.status(200).json({ occupations: occupations })
    } catch (error) {
        console.error(error)
        res.status(400).json({ messsage: `${error}` })
    }
}

module.exports = {
    getAll
}