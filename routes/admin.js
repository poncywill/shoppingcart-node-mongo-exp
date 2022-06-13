const rootDir= require('../utils/path')
// const products = []
const productController = require('../controllers/product')
const {Router}=require('express')

const router = new Router()
router.get('/add-product',productController.getAddProducts)
router.post('/product',productController.postAddProduct)
module.exports=router