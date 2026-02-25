
import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js';
import foodRouter from "./routes/food.route.js";


// app config
const app = express()
const port = 5000

// middleware
app.use(express.json());
app.use(cors());


// db connections
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));

app.get('/',(req,res)=>{
    res.send("Api working")

})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})