require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// GET /places/* - renders views/functionality in controllers
app.use("/places", require("./controllers/places"))

// GET / - home page
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// GET /* - error page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// server listening on PORT variable defined in .env
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
