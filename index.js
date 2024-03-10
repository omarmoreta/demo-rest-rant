require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use("/places", require("./controllers/places"))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
