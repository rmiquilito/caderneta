const User = require('../models/user')

async function auth(req, res) {
    const user = await User.findOne({ where: { email: req.body.email, password: req.body.password } })
    if (user !== null) {
        req.session.auth = true
        req.session.user = user
        res.redirect('/home')
    } else {
        
        res.redirect('/')
    }
}

function cookie(req, res, next) {
    if (req.session.auth) {
        next()
    } else {
        
        res.redirect('/')
    }
}

function out(req, res) {
    req.session.destroy()
    res.redirect('/')
}

module.exports = { auth, cookie, out }