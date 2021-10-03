const Crimes = (connection, Sequelize) => {
  return connection.define('crimes', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.TEXT('medium') },
    dateOfCrime: { type: Sequelize.STRING },
    story: { type: Sequelize.TEXT('medium') },
  }, { parnoid: true })
}

module.exports = Crimes
