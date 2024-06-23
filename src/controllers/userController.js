const User = require('../models/user')

function register(req, res) {
    User.create(
        {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            number: req.body.number,
            address: req.body.address
        }
    ).then(() => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}

module.exports = { register }