const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

// add code soon 

module.exports = router