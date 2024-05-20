import { Request, Response } from 'express';
import { User } from '../../entities/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { autoInjectable } from 'tsyringe';
import { ExampleService } from 'app/services/exampleServices';

@autoInjectable()
export class ExampleController {

    constructor(
        private exampleService: ExampleService
    ) { }

    async index(res: Response, req: Request) {

        const message = await this.exampleService.getMessage();
        return res.json(message);
    }
}