const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


let _db;
MongoConnect = (callback) => {

    MongoClient.connect("mongodb+srv://poncy:expertz12345@cluster0.sbeeafp.mongodb.net/cart?retryWrites=true&w=majority")
        .then(client => {
            console.log("Database connected")
            _db = client.db()
            callback()
        }).catch(err => console.log(err))
}
const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'no database found'
}

exports.MongoConnect = MongoConnect;
exports.getDb = getDb