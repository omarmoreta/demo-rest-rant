const router = require('express').Router()

// GET /places - places index
router.get("/", (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/404-cat.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/dessert-cups.jpg'
    }]

    res.render("places/index", { places })
})

// POST /places - create places
// GET /places/new - form to create places
router.get("/new", (req, res) => {
    res.render("places/new")
})
// GET /places/:id - specific place details
// PUT /places/:id - update specific place
// GET /places/:id/edit - form to edit places
// DELETE /places/:id = delete place
// POST /places/:id/rant - create rant about a place
// DELETE /places/:id/rant/:rantid - delete rant


module.exports = router
