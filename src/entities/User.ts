import { IsEmail, Length } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @Length(1, 255)
    name!: string;

    @Column()
    @IsEmail()
    email!: string;

    @Column()
    @Length(1, 255)
    password!: string;
}
