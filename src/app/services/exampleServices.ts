import { injectable } from "tsyringe";

@injectable()
export class ExampleService {

    async getMessage() {

        const message = { "message": "Hello World" };
        return message;
    }
}