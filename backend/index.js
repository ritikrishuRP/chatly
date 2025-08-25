import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/db.js';
dotenv.config();

const port=process.env.PORT || 8000;

import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);

app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})