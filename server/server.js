import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import seedRouter from './routers/SeedRouter.js';
import productRouter from './routers/ProductsRouter.js';
import data from './data/data.js';
import combineRouter from './routers/CombineRouter.js';
import newsRouter from './routers/NewsRouter.js';
import userRouter from './routers/UserRouter.js';
import orderRouter from './routers/OrdersRouter.js';
import wishlistRouter from './routers/WishListRouter.js';
const port = process.env.PORT;

// config dotenv file
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected');
}).catch(err => console.log(err.message));


const app = express();
// middleware server and client
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// api
app.use('/api/seed', seedRouter);
app.use('/api/combine', combineRouter);
app.use('/api/products', productRouter);
app.use('/api/posts', newsRouter);
app.use('/api/user', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/wishlist', wishlistRouter);

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use((err, req, res, next)=>{
  res.status(500).send({message: err.message});
});

app.listen(port, () => console.log(`Server running at port: ${port}`));