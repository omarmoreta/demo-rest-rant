require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// middleware
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))


// GET /places/* - renders views/functionality in controllers
app.use("/places", require("./controllers/places"))

// GET / - home page
app.get('/', (req, res) => {
    res.status(200).render("home")
})

// GET /* - error page
app.get('*', (req, res) => {
    res.status(404).render("error404")
})

// server listening on PORT variable defined in .env
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
