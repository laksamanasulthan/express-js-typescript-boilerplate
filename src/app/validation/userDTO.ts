import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Transform, Type } from "class-transformer";

export class UserDTO {
    @IsNotEmpty()
    name: string | undefined;

    @IsEmail()
    email: string | undefined;

    @MinLength(6)
    password: string | undefined;

}
