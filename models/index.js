const Sequelize = require('sequelize')
const configs = require('../config/sequelize')
const CrimesModel = require('./crime')

const environment = process.env.NODE_ENV || 'development'
const configuration = configs[environment]

const connection = new Sequelize(configuration.database, configuration.username, configuration.password, {
  host: configuration.host, dialect: configuration.dialect
})

const Crimes = CrimesModel(connection, Sequelize)

module.exports = { Crimes, Op: Sequelize.Op }
