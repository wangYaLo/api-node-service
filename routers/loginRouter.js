const express = require('express')
const router = express.Router()
const addUser = require('../utils/adduser')

router.post('/signup', function(req, res, next) {
    addUser(req.body, 'signup').then(() => {
        next()
    }).catch((err) => {
        const data = {
            code: 'A2030',
            msg: err
        }
        res.send(data)
    })
}, function(req, res) {
    const data = {
        code: '200',
        msg: '注册成功'
    }
    res.send(data)
})

router.post('/signin', function(req, res, next) {
    addUser(req.body, 'signin').then(() => {
        next()
    }).catch((err) => {
        const data = {
            code: 'A2030',
            msg: err
        }
        res.send(data)
    })
}, function(req, res) {
    const data = {
        code: '200',
        msg: '登录成功'
    }
    res.send(data)
})

router.use(function(req, res, next){
    res.status(404).send('未连接成功')
})

module.exports = router