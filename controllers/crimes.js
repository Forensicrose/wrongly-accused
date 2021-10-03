const models = require('../models')

const getAllCrimes = async (req, res) => {
  const allCrimes = await models.Crimes.findAll()

  return res.send(allCrimes)
}

const getCrimeByIdentifier = async (req, res) => {
  try {
    const { identifier } = req.params
    const oneCrime = await models.Crimes.findOne({
      where: {
        [models.Op.or]: [
          { id: identifier },
          { title: { [models.Op.like]: `%${identifier}%` } },
          { story: { [models.Op.like]: `%${identifier}%` } }
        ]
      }
    })

    // const getCrimeById = async (req, res) => {
    //   try {
    //     const { id } = req.params
    //     const oneCrime = await models.Crimes.findOne({
    //       where: { id },
    //     })

    return oneCrime
      ? res.send(oneCrime)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Could not retrieve crime. Please try again!')
  }
}

const createNewCrime = async (req, res) => {
  const { title, dateOfCrime, story } = res.body

  // eslint-disable-next-line max-len
  if (!title || !dateOfCrime || !story) return res.status(400).send('The following fields are required: title, dateOfCrime, and story.')

  const newCrime = await models.Crimes.create({ title, dateOfCrime, story })

  return res.status(201).send(newCrime)
}

module.exports = { getAllCrimes, getCrimeByIdentifier, createNewCrime }
