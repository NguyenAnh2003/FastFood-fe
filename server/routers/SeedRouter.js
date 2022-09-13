import express from 'express';
import data from '../data/data';
import Product from '../models/ProductModel';

const seedRouter = express.Router();

seedRouter.get('/', async(req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  res.send(createdProducts);
});

export default seedRouter;