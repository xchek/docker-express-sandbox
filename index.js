import express from 'express'
import logger from './logging.js'

let app = express()

let port = process.env.PORT | 8080

let location = `http://localhost:${port}`

app.use(logger)

app.get('/', (req, res) => {
  res.json({'Hello': 'World'})
})

app.listen(port, () => {
  console.log(`Test app listening at ${location}`)
})

