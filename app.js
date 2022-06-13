const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const rootDir = require('./utils/path')
const MongoConnect=require('./models/database')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

MongoConnect(client=>{
    console.log(client)
    app.listen(3000,()=>{console.log('server is running port 3000')})

})
