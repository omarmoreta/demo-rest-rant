const router = require('express').Router()

// GET /places - places index
router.get("/", (req, res) => {
    res.send("GET /places route")
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
