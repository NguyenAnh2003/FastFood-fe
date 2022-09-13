import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


// config dotenv file
dotenv.config();
mongoose.connect(process.env)



const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log(`Server running at port: ${port}`));