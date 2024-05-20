import { body, ValidationChain } from 'express-validator';

export const registerValidator: ValidationChain[] = [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
];

export const loginValidator: ValidationChain[] = [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
];