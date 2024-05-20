import { Router } from 'express';
import { register, login } from '../app/controllers/userController';
import { body } from 'express-validator';

const router = Router();

router.post('/register', [
    body('name').isLength({ min: 1 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], register);


router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], login);

router.get('/', function (req, res) {
    return res.json({ "aHelloworld": "Helddddlowowrd" });
});

export default router;
