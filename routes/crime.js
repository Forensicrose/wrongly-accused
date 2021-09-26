const { response } = require('express')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('This will get one crime')
})

router.get('/:id', (req, res) =>{
    res.send('This will get one crime')
})

router.post('/', (req, res) => {
    res.send('Create a crime')
})

module.exports = router