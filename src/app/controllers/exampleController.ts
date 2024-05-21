import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';

export const ExampleController = {

    async index(req: Request, res: Response) {
        const message = { "message": "Hello World" };
        return res.json(message);
    },


    async store(req: Request, res: Response) {

        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const message = {
            "field 1": data.field,
            "field 2": data.field2
        };

        return res.json(message);
    }
}

