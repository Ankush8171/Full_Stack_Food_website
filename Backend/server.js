
import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import cors from "cors"
import path from "path";
import { connectDB } from './config/db.js';
import foodRouter from "./routes/food.route.js";
import userRouter from "./routes/user.route.js";
import cartRouter from "./routes/cart.route.js";
import 'dotenv/config.js'
import orderRouter from "./routes/order.route.js";


// app config
const app = express()
const port = 5000

// middleware
app.use(cors());
app.use(express.json());



// db connections
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


app.get('/',(req,res)=>{
    res.send("Api working")

})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})