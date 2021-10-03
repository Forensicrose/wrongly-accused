const express = require('express')
const router = express.Router()
const { getAllCrimes, getCrimeByIdentifier, createNewCrime } = require('../controllers/crimes')


router.get('/', getAllCrimes)

router.get('/:identifier', getCrimeByIdentifier)

router.post('/', createNewCrime)


module.exports = router
