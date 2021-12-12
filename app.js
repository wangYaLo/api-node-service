const express = require('express')
const fs = require('fs')
const cors = require('cors')
const loginRouter = require('./routers/loginRouter')
const app = express()
app.use(cors())
app.use(express.urlencoded())

app.use('/login', loginRouter)
app.get('/', function (req, res) {
    res.send('123')
})

app.listen(8888, function () {
    console.log('node is listen to 8888')
})