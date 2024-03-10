const router = require('express').Router()

// GET /places - places index
router.get("/", (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]

    res.render("places/index", { places })
})

// POST /places - create places
// GET /places/new - form to create places
// GET /places/:id - specific place details
// PUT /places/:id - update specific place
// GET /places/:id/edit - form to edit places
// DELETE /places/:id = delete place
// POST /places/:id/rant - create rant about a place
// DELETE /places/:id/rant/:rantid - delete rant


module.exports = router
