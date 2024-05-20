// import { exampleController } from 'config/dependency-resolver';
import { ExampleController } from 'app/controllers/exampleController';
import { Router } from 'express';
import { container } from 'tsyringe';

const router = Router();

// router.post('/register', UserController);

// router.post('/login', login);

// router.get('/', index);

const exampleController = container.resolve(ExampleController);

router.get('/', exampleController.index.bind(exampleController));

export default router;
