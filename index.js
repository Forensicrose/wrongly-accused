const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('getAllCrimes')
})

app.get('/getAllCrimes', (request, response) => {
  response.render('')
})


app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 1337...')
})
