import express from 'express';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRouter from './router/Auth.js';
import userRouter from './router/user.js';
import foodRouter from './router/food.js';
import deliverRouter from './router/deliver.js';
import orderRouter from './router/order.js';
dotenv.config()



const app = express()


//connecting mongodb
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("db is connecting");
}).catch((err)=>{
    console.log({ message: err.message})
})


//middleware
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/food', foodRouter)
app.use('/api/order', orderRouter)
app.use('/api/deliver', deliverRouter)





//listing port 8080
const port = process.env.PORT || 8080
app.listen(port, () =>{
    console.log(`backend is running on port ${port}`)
})