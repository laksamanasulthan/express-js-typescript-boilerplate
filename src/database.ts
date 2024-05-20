import { createConnection } from 'typeorm';
import { User } from './entities/User';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  await createConnection({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User],
    synchronize: true,
    logging: false,
  });
};
