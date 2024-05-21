import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Length, IsEmail } from 'class-validator';

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
  password!: string;

}
