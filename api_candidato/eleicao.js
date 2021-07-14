const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Rotas
const candidatoRota = require('./rotas/candidatoRotas')
app.use('/api/candidato', candidatoRota)

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`)
})