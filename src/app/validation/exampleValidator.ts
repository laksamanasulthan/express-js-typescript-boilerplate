import { ValidationChain, body, param } from "express-validator"


export const exampleValidator: ValidationChain[] = [
    body('field').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('field2').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]