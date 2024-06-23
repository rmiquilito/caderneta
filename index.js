const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const sequelize = require('./src/db')
const app = express()

const port = 3000

app.engine('html', mustacheExpress())

app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.use(session({
    secret: 'elephant',
    resave: false,
    saveUninitialized: false
}))

app.use('/', require('./src/routes/userRoute'))
app.use('/', require('./src/routes/authRoute'))
app.use('/', require('./src/routes/appRoute'))

sequelize.sync()

app.listen(port, () => { console.log(`Example app listening on port ${port}`) })