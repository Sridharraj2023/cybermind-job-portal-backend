import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './confiq/confiq.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
