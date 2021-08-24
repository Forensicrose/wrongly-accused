const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('homepage')
})

app.get('/crimes', (request, response) => {
  response.render('allCrimes')
})

app.get('/crimes/:names', (request, response) => {
  response.render('crimesByName')
})



app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 1337...')
})
