import express from 'express';
import data from '../data/data.js';
import Product from '../models/ProductModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async(req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);

  res.send({createdProducts});
});

export default seedRouter;