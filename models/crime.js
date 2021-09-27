const crimes = (connection, Sequelize) => {
  return connection.define('crimes', {
    id: { type: Sequelize.INTERGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    dateOfCrime: { type: Sequelize.STRING },
    story: { type: Sequelize.TEXT('medium') },
  }, { parnoid: true })
}

module.exports = crimes
