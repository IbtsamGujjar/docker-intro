const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
    res.send('Ibtsam here!')
  })

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on :${port}...`)
})