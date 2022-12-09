const {Router} = require("express");

const productsController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {ProductsModel} = require("../models/ProductModel")


productsController.get("/",async (req, res)=>{
    
    const products =  await ProductsModel.find({})
    
    res.send(products)
})



module.exports = {
    productsController
}