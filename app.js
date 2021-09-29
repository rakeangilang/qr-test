const express = require('express')
const app = express()
const dashboardController = require('./controllers/dashboardController')
const bodyParser = require('body-parser')

const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use('/', dashboardController)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})