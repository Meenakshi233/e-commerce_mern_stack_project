import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './Routes/user.js';
import productRouter from './Routes/product.js';
import cartRouter from './Routes/cart.js';
import addressRouter from './Routes/address.js';

const app = express();

app.use(bodyParser.json());

// home testing route
app.get('/',(req,res)=>res.json({message:'This is home route'}));


// user Router
app.use('/api/user',userRouter);

// product Router
app.use('/api/product', productRouter);

// cart Router
app.use('/api/cart', cartRouter);

// address Router
app.use('/api/address', addressRouter);

mongoose.connect(
    "mongodb+srv://batchufisheye:ERTsbN7PJJkM8N0l@cluster0.xm6h0vz.mongodb.net/",
    {
    dbName:"MERN_E_COMMERCE"
    }
).then(()=>console.log("Mongodb connected successfully"))
 .catch((err)=>console.log("err"));

const port = 1000;
app.listen(port,()=>console.log(`Server is running on port 1000`));