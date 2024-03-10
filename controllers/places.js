const router = require('express').Router()
const places = require("../models/places.js")

// GET /places - places index
router.get("/", (req, res) => {
    res.render("places/index", { places })
})

// POST /places - create places
router.post('/', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

// GET /places/new - form to create places
router.get("/new", (req, res) => {
    res.render("places/new")
})

// GET /places/:id - specific place details
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})

// PUT /places/:id - update specific place
// GET /places/:id/edit - form to edit places
// DELETE /places/:id = delete place
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

// POST /places/:id/rant - create rant about a place
// DELETE /places/:id/rant/:rantid - delete rant


module.exports = router
