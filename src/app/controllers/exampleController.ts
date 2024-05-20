import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export const ExampleController = {

    async index(req: Request, res: Response) {
        const message = { "message": "Hello World" };
        return res.json(message);
    },


    async indexlain(req: Request, res: Response) {
        const message = { "message": "Cek" };
        return res.json(message);
    }
}

