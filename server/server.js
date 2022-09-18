import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routers/SeedRouter.js';
import productRouter from './routers/ProductsRouter.js';
import data from './data/data.js';


// config dotenv file
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected');
}).catch(err => console.log(err.message));


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// api
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);


app.use((err, req, res, next)=>{
  res.status(500).send({message: err.message});
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running at port: ${port}`));