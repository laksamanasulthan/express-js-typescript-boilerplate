import { container } from "tsyringe";
import { ExampleController } from "../app/controllers/exampleController";


export const exampleController = container.resolve(ExampleController);