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
    product.save().then(()=>{
        console.log('products inserted successfully')
    })
    
    res.redirect('/')
}
exports.getProducts=(req,res,next)=>{

    Product.fetchAll()
    .then(products=>{
        res.render('shop',{products:products,pageTitle:"Shop"})

    })

    }

    exports.getProduct=(req,res)=>{
        const prodId=req.params.id 


        Product.findById(prodId)
        .then(product=>{
            res.render('product_details',{pageTitle:product.productName,
            product:product})
        })
    }