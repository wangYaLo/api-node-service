const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, function(err, client) {
    if(err) {
        console.log('数据库连接失败')
        return false
    }
    const db = client.db('admin');
    const newdata = { name: 'wangYaLo'}
    db.collection('user').find(newdata).toArray(function(err, results) {
        if(results.length === 0) {
            console.log('没有查找到')
            return false
        }
        console.log(results);
        client.close();
    })
    // db.collection('user').insertOne({'name':'wangYaLo','password':'123456'},function(error){
	// 	if(error){
	// 		console.log('添加失败');
	// 		return false;
	// 	}
	// 	console.log('添加成功')
	// 	//关闭数据库
	// 	client.close();
	// })
})