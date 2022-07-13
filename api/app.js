const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use('/files', require('./routes/files'))

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})

module.exports = app
