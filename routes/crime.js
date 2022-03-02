const express = require('express')
const router = express.Router()
const { getAllCrimes, getCrimeByIdentifier, createNewCrime, deleteCrimeById } = require('../controllers/crimes')


router.get('/', getAllCrimes)

router.get('/:identifier', getCrimeByIdentifier)

router.post('/', createNewCrime)

router.delete('/:id', deleteCrimeById)

// router.get('/', getByStory)
module.exports = router
