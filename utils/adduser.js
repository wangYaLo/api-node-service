const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
function addUser(data, isLogin) {
  return new Promise((reslove, reject) => {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        reject('数据查询报错')
      }
      const db = client.db('admin');
      if (isLogin === 'signup') {
        db.collection('user').find({ username: data.username }).toArray(function (err, results) {
          if (results.length === 0) {
            db.collection('user').insertOne(data, function (error) {
              if (error) {
                reject('添加失败')
              }
              //关闭数据库
              client.close();
              reslove('添加用户成功')
            })
          } else {
            reject('用户已经存在')
          }
        })
      } else if (isLogin === 'signin') {
        db.collection('user').find(data).toArray(function (err, results) {
          if (results.length === 0) {
            reject('用户名或者密码不正确')
          } else {
            reslove('登录成功')
          }
        })
      }
    })
  })
}

module.exports = addUser