import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/routes';
import { DatabaseConnection } from './config/database';


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', routes);

DatabaseConnection.initialize().then(async () => {
    console.log('Connected to the database');
}).catch(error => console.log('Database connection error:', error));


app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});
