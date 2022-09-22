import express from 'express';
import data from '../data/data.js';
import News from '../models/NewsModel.js';
import Product from '../models/ProductModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async(req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);

  await News.deleteMany({});
  const createdNews = await News.insertMany(data.news);

  res.send({
    createdProducts,
    createdNews
  });
});


seedRouter.get('/main', async (req, res) => {
  const products = await Product.find({
    "new": true
  });

  const news = await News.find();
  res.send({
    products,
    news,
  });

})

export default seedRouter;