const ProductData = require('../models/products')

let product = [{
    "id":0,
    "name":'',
    "price" : '',
    "mrp":'',
    "stock":'',
    "isPublished":''
}]

const createProduct = (req,res)=>{
   
    const {id,name,price,mrp,stock,isPublished} = req.body
    if(!id && !name){
        return res.status(400).send("Name or id is missing")
    }

    const newProduct = {id,name,price,mrp,stock,isPublished}
    product.push(newProduct)
    res.send('New product is added')
}
const modifyProduct = (req,res)=>{
    let filteredArray = product.find((e) => parseInt(e.id) === parseInt(req.params.id))
   const {id,name,price,mrp,stock,isPublished} = req.body;
   filteredArray.id = id;
   filteredArray.name = name;
   filteredArray.price = price;
   filteredArray.mrp = mrp;
   filteredArray.stock = stock;
   filteredArray.isPublished = isPublished;
   
    res.status(200).send('procesing..........')

}
const patchmodifyProduct = (req,res)=>{
    let filteredArray = product.filter((e) => parseInt(e.id) === parseInt(req.params.id))[0]
   const {id,name,price,mrp,stock,isPublished} = req.body;
   if(id)filteredArray.id = id;
   if(name)filteredArray.name = name;
   if(price)filteredArray.price = price;
   if(mrp)filteredArray.mrp = mrp;
   if(stock)filteredArray.stock = stock;
   if(isPublished)filteredArray.isPublished = isPublished;
   
    res.status(200).send(product)

}
    
const deleteProduct = (req,res)=>{
    
        let productIndex = product.findIndex(e => e.id === parseInt(req.params.id))
        if(productIndex ==-1){
            res.status(404).send('Product not found')
        }else{
            product.splice(productIndex,1)
            res.status(200).send(product)
        }

}
const displayProduct = (req,res)=>{
    if(req.params.id){
        let fiterData = product.find(e => e.id === parseInt(req.params.id))
        res.send(fiterData)
    }else{
        res.send(product)
    }
}

module.exports = {
    createProduct,
    modifyProduct,
    deleteProduct,
    displayProduct,
    patchmodifyProduct
}