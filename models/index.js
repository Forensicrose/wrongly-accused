const Sequelize = require('sequelize')
const CrimesModel = require('./crime')

const connection = new Sequelize('crime', 'criminal', 'Cr!m3$', {
  host: 'localhost', dialect: 'mysql'
})

const Crimes = CrimesModel(connection, Sequelize)

module.exports = Crimes
