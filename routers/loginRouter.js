const express = require('express')
const router = express.Router()
const addUser = require('../utils/adduser')

router.post('/signup', function (req, res, next) {
  addUser(req.body, 'signup').then(() => {
    next()
  }).catch((err) => {
    const data = {
      code: 'error',
      msg: err
    }
    res.send(data)
  })
}, function (req, res) {
  const data = {
    code: 'success',
    msg: '注册成功'
  }
  res.send(data)
})

router.post('/signin', function (req, res, next) {
  addUser(req.body, 'signin').then(() => {
    next()
  }).catch((err) => {
    const data = {
      code: 'error',
      msg: err
    }
    res.send(data)
  })
}, function (req, res) {
  const data = {
    code: 'success',
    msg: '登录成功'
  }
  res.send(data)
})

router.use(function (req, res, next) {
  res.status(404).send('未连接成功')
})

module.exports = router