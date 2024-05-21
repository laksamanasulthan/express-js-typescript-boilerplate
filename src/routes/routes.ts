import { exampleValidator } from '../app/validation/exampleValidator';
import { ExampleController } from '../app/controllers/exampleController';
import { Router } from 'express';
import { exampleMiddleware } from '../app/middlewares/exampleMiddleware';

const router = Router();

router.get('/', ExampleController.index);
router.post('/post', exampleValidator, exampleMiddleware, ExampleController.store);

export default router;
