const User = require("../models/user")
const Customer = require("../models/customer")
const Credit = require("../models/credit")

function authView(req, res) { res.render('auth.html') }
function registerView(req, res) { res.render('register.html') }
function homeView(req, res) {
    User.findOne({
        where: {
            id: req.session.user.id,
        }
    }).then((user) => {
        res.render('home.html', { user });
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}

function registerCustomer(req, res) {
    Customer.create(
        {
            name: req.body.name,
            number: req.body.number,
            address: req.body.address
        }
    ).then(() => {
        res.redirect('/home')
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}

function registerCredit(req, res) {
    Credit.create(
        {
            date: req.body.date,
            customer: req.body.customer,
            value: req.body.value
        }
    ).then(() => {
        res.redirect('/home')
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}

function userLogsView(req, res) {
    User.findAll().then((users) => {
        res.render('userLogs.html', { users });
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}
function customerLogsView(req, res) {
    Customer.findAll().then((customers) => {
        res.render('customerLogs.html', { customers });
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}
function creditLogsView(req, res) {
    Credit.findAll().then((credits) => {
        res.render('creditLogs.html', { credits });
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}

function userOnlineEditorView(req, res) {
    User.findOne({
        where: {
            id: req.session.user.id,
        }
    }).then((user) => {
        res.render('userEditor.html', { user });
    }).catch((err) => {
        console.log(err)
        
        res.redirect('/')
    })
}

function userEditorView(req, res) { res.render('userEditor.html') }

function customerEditorView(req, res) { res.render('customerEditor.html') }

module.exports = {
    authView,
    registerView,
    homeView,
    registerCustomer,
    registerCredit,
    userLogsView,
    customerLogsView,
    creditLogsView,
    userOnlineEditorView,
    userEditorView,
    customerEditorView
}