const express = require('express')
const crimeRouter = require('./routes/crime')

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
  res.render('crimes')
})

app.use('/api/crime/', crimeRouter)



app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening from space on port ${port}...`)
})
