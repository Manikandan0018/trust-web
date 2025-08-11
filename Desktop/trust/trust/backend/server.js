
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './backend/connectDB.js';
import textRoute from './backend/routes/text.route.js'
import cors from "cors";
const app = express();
dotenv.config();


app.use(cors({ origin: 'http://localhost:5173', credentials: true })); 
app.use(express.json());








app.use('/api/auth',textRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is listening to port "+PORT)
    connectDB()
})
