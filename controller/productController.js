
const { model } = require('mongoose');
const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')
 
const createProduct = async(req, res) => {
    try {
      const product = await Product.create(req.body)
      res.status(200).json(product);
  
    } catch (error) {
      res.status(500);
      throw new Error(error.message)
    } 
  }


const getProducts =  asyncHandler(async(req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
      
    } catch (error) {
      res.status(500);
      throw new Error(error.message)
    }
  })


const updateProduct = asyncHandler(async(req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if(!product){
        res.status(404);
        json('Cannot find any product with that ID ${id}');
      }
      const updateProduct = await Product.findById(id);
      res.status(200).json(product);
  
  
    } catch (error) {
      res.status(500);
      throw new Error(error.message)
    }
  })

const getProductByID = asyncHandler(async(req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product)
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
      
      //res.status(500).json(message. error.message);
    }
  })

const deleteProduct =  asyncHandler(async(req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
  
      if(!product){
        res.status(404); 
        //throw new Error('cannot find any product with that ID ${id}');
        throw new Error(`Cannot find any product with that ID ${id}`);
      }
      res.status(200).json({product});

    } catch (error) {
      res.status(500);
      throw new Error(error.message)
    } 
  
  })

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    getProductByID,
    deleteProduct
}