import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

app.get('/', (req, res)=>{
  res.send('Server is Live!')
})

app.use(requireAuth());
app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log("Server is running on port", PORT);
})