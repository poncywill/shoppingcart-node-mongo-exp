const mongodb=require('mongodb')
const MongoClient =mongodb.MongoClient

MongoConnect=(callback)=>{

    MongoClient.connect("mongodb+srv://poncy:expertz12345@cluster0.sbeeafp.mongodb.net/cart?retryWrites=true&w=majority")
.then(client=>{
    console.log("Database connected")
    callback(client)
}).catch(err=>console.log(err))
}

module.exports=MongoConnect;