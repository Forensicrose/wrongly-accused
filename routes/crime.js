const express = require('express')
const router = express.Router()
const { getAllCrimes, getCrimeById } = require('../controllers/crimes')


router.get('/', getAllCrimes)

router.get('/:id', getCrimeById)

router.post('/', (req, res) => {
  res.send('Create a crime')
})

module.exports = router
