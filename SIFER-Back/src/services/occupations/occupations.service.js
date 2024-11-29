const { Occupation } = require('../../models/models')

const getAll = async () => {
    const occupations = await Occupation.findAll()

    if (!occupations)
        throw new Error('Not found occupations')
    
    return occupations
}

module.exports = {
    getAll
}