import express from "express";
import Product from "../models/ProductModel.js";
import expressAsyncHandler from 'express-async-handler';


const productRouter = express.Router();

// send new product and sale
// send news
productRouter.get("/", async (req, res) => {
  const products = await Product.find({
    new: true
  });
  res.send(products);
});

productRouter.get("/categories",  expressAsyncHandler(async (req, res) => {
  const categories = await Product.find().distinct('category')
  res.send(categories)
}));

productRouter.get("/:id", expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({message: 'Not found'});
  }
}));


export default productRouter;
