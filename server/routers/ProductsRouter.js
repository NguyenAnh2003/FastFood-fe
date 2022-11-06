import express from "express";
import Product from "../models/ProductModel.js";
import expressAsyncHandler from 'express-async-handler';


const productRouter = express.Router();

// send new product and sale
// send news
productRouter.get("/", async (req, res) => {
  const PAGE_SIZE = 6;
  const page = parseInt(req.query.page || "0");
  const category = req.query.category;
  const categoryFilter = category && category !== 'all' ? { category } : {};

  const totalPages = await Product.countDocuments({
    ...categoryFilter
  }); //

  const products = await Product.find({
    ...categoryFilter
  }).limit(PAGE_SIZE).skip(page * PAGE_SIZE);


  res.send({
    totalPages: Math.ceil(totalPages / PAGE_SIZE),
    products
  });
});



productRouter.get("/categories", expressAsyncHandler(async (req, res) => {
  const categories = await Product.find().distinct('category')
  res.send(categories)
}));

productRouter.get("/:id", expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Not found' });
  }
}));


export default productRouter;
