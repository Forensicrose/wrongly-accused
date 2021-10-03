const express = require('express')
const crimeRouter = require('./routes/crime')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
  res.render('crimes')
})

app.use('/api/crime/', crimeRouter)



app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000...')
})
