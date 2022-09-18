import express from 'express';
import Product from '../models/ProductModel.js';

const productRouter = express.Router();

// send new product and sale
// send news
productRouter.get('/', async (req, res) => {
  const products = await Product.find({
    "new": true,
  });
  res.send(products);
});

export default productRouter;