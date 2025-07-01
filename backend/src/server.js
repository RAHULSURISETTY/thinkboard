import express from 'express';
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';

import cors from 'cors';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001

connectDB()

//middleware
//this middleware will parse JSON bodies: req.body (access the title and content)
app.use(express.json())
app.use(cors(
    {
        origin: 'http://localhost:5173', // Replace with your frontend URL
    }
))

app.use("/api/notes",notesRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})
//UcllruQqXm6Ddfw1
