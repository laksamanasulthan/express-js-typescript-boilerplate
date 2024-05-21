import { DataSource } from 'typeorm';
import { env } from './env';

export const DatabaseConnection = new DataSource({
    type: 'mysql',
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities: ['src/entities/*.ts'],
    synchronize: env.SYNC,
    logging: ["query", "error"],
    migrations: [],
    subscribers: [],
})