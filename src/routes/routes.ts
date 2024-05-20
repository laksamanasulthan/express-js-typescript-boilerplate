import { ExampleController } from '../app/controllers/exampleController';
import { Router } from 'express';

const router = Router();

router.get('/', ExampleController.index);
router.get('/cek', ExampleController.indexlain);

export default router;
