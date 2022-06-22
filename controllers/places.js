const Router = require('express').Router()

// GET /places
Router.get('/', (req, res) => {
    let places = [{
        name: 'Alfredo API',
        city: 'Portland',
        state: 'OR',
        cuisines: 'Italian, South European',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Cannoli Cafe',
        city: 'Washington',
        state: 'D.C',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
})

module.exports = Router