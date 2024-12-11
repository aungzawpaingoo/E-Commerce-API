const ProductModel = require('../models/productModel');

//{this is the get products api - url - /api/v1/products}
exports.getProducts = async (req, res, next) => {

   const products = await ProductModel.find({});

   res.json({
      success: true,
      products
   })
}

//{this is the get single product api - url - /api/v1/product/:id}
exports.getSingleProduct = async (req, res, next) => {

   try {
      console.log(req.params.id, ' - Product Id')
      const product = await ProductModel.findById(req.params.id);

      res.json({
         success: true,
         product
      })
   } catch (error) {
      res.status(404).json({
         success: false,
         message: error.message
      })
   }


}

