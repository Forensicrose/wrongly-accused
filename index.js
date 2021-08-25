const express = require('express')

const app = express()

app.set('view engine', 'pug')


// documentation is under this route. As project progress, additional routes will be created as shown below
app.get('/crimes', (request, response) => {
  response.render('crimes')
})

// future routes
app.get('/crimes/:id', (request, response) => {
  response.render('crimesById')
})

app.post('/crimes', (request, response) => {
  response.render('createNewCrime')
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 1337...')
})
