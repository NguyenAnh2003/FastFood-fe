import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import seedRouter from './routers/SeedRouter.js';
import productRouter from './routers/ProductsRouter.js';
import data from './data/data.js';
import combineRouter from './routers/CombineRouter.js';
import newsRouter from './routers/NewsRouter.js';


// config dotenv file
dotenv.config();
mongoose.connect(process.env.DB_URI).then(() => {
  console.log('Connected');
}).catch(err => console.log(err.message));


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// api
app.use('/api/seed', seedRouter);
app.use('/api/combine', combineRouter);
app.use('/api/products', productRouter);
app.use('/api/posts/', newsRouter);


app.use((err, req, res, next)=>{
  res.status(500).send({message: err.message});
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running at port: ${port}`));