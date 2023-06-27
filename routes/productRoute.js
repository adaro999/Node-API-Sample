const express = require('express');
const Product = require('../models/productModel');
const {createProduct,
    getProducts,
    updateProduct,
    getProductByID,
    deleteProduct} = require('../controller/productController')

const router = express.Router();

//get data from database
router.get('/', getProducts)
  
//update the product
router.put('/:id', updateProduct)
  
//get data from database
router.get('/:id', getProductByID)
  
  
//delete the data from databaase
  
router.delete('/:id', deleteProduct)
  
//create and send data to mongoDB
router.post('/products', createProduct)

module.exports = router;