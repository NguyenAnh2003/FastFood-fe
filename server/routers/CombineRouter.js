import express from 'express';
import News from '../models/NewsModel.js';
import Product from '../models/ProductModel.js';

const combineRouter = express.Router();

combineRouter.get('/home', async (req, res) => {
  const products = await Product.find({
    "new": true,
  });
  const news = await News.find();
  res.send({
    products,
    news
  });
}); 

export default combineRouter;