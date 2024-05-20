import { bool, cleanEnv, host, num, port, str, url } from "envalid";
import dotenv from 'dotenv';

dotenv.config();

export const env = cleanEnv(process.env, {
    DATABASE_USERNAME: str(),
    DATABASE_PASSWORD: str(),
    DATABASE_NAME: str(),
    DATABASE_HOST: host(),
    DATABASE_PORT: port(),
    SYNC: bool(),
});

