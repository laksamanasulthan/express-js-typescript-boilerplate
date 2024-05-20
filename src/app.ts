import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import { connectDB } from './database';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/users', userRoutes);

connectDB().then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Database connection error:', error);
});

export default app;
