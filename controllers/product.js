const Product=require('../models/product')
exports.getAddProducts= (req,res)=>{
    res.render('add-product',{pageTitle:'Add Product'})
}
exports.postAddProduct=(req,res)=>{
    console.log('add product',req.body)
    const productName=req.body.productName
    const imgUrl=req.body.imgUrl
    const price=req.body.price
    const description=req.body.description

    const product=new Product(productName,imgUrl,price,description)
    product.save()
    
    res.redirect('/')
}
exports.getProducts=(req,res,next)=>{
    const products=Product.fetchAll()
    console.log('get products',products);
    
  
    
    res.render('shop',{products:products,pageTitle:"Shop"})
    
  
  }