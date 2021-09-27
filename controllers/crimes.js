const models = require('../models')

const getAllCrimes = async (req, res) => {
  const allCrimes = await models.Crimes.findAll()

  return res.send(allCrimes)
}

const getCrimeByIdentifier = async (req, res) => {
  try {
    const { identifier } = req.params
    const oneCrime = await models.Crime.findOne({
      where: {
        [models.Op.or]: [
          { id: identifier },
          { title: { [models.Op.like]: `%${identifier}%` } },
          { story: { [models.Op.like]: `%${identifier}%` } }
        ]
      }
    })

    return oneCrime
      ? res.send(oneCrime)
      : res.send(404)
  } catch (error) {
    return res.status(500).send('Could not retrieve crime. Please try again!')
  }
}

module.exports = { getAllCrimes, getCrimeByIdentifier }
