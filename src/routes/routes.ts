import { exampleValidator } from '../app/validation/exampleValidator';
import { ExampleController } from '../app/controllers/exampleController';
import { Router } from 'express';
import { exampleMiddleware } from '../app/middlewares/exampleMiddleware';
import { idValidator } from '../app/validation/paramsValidatos';

const router = Router();

router.get('/', exampleMiddleware, ExampleController.index);
router.post('/post', exampleValidator, exampleMiddleware, ExampleController.store);
router.get('/:id', idValidator, exampleMiddleware, ExampleController.show);
router.put('/:id/update', idValidator, exampleValidator, exampleMiddleware, ExampleController.update);
router.delete('/:id/delete', idValidator, exampleMiddleware, ExampleController.delete);

export default router;
