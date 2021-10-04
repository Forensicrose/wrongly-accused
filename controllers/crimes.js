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

    return oneCrime
      ? res.send(oneCrime)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Could not retrieve crime. Please try again!')
  }
}

const createNewCrime = async (req, res) => {
  const { title, dateOfCrime, story } = req.body

  // eslint-disable-next-line max-len
  if (!title || !dateOfCrime || !story) return res.status(400).send('The following fields are required: title, dateOfCrime, story.')

  const newCrime = await models.Crimes.create({ title, dateOfCrime, story })

  return res.status(201).send(newCrime)
}

const deleteCrimeById = async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).send({
      message: 'Please provide the id of the crime you are trying to delete.'
    })
  }

  const crime = await models.Crimes.findOne({
    where: {
      id
    }
  })

  if (!crime) {
    return res.status(400).send({
      message: `No crime exists with the id ${id}`
    })
  }
  try {
    await crime.destroy()

    return res.send({
      message: `Successfully deleted the crime with ${id}`
    })
  } catch (err) {
    return res.status(400).send({
      message: `Error ${err.message}`
    })
  }
}

module.exports = { getAllCrimes, getCrimeByIdentifier, createNewCrime, deleteCrimeById }

