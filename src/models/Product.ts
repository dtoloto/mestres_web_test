import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { MinLength, IsNotEmpty } from 'class-validator';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  @IsNotEmpty({ message: 'O campo name não pode ser vazio' })
  name: string;

  @Column({
    unique: true,
    nullable: false,
  })
  @MinLength(3, { message: 'O campo SKU necessita de no minímo 3 caracteres' })
  SKU: string;

  @Column({
    nullable: false,
  })
  @IsNotEmpty({ message: 'O campo amount não pode ser vazio' })
  // eslint-disable-next-line @typescript-eslint/camelcase
  amount: number;

  @Column({
    nullable: false,
  })
  @IsNotEmpty({ message: 'O campo value não pode ser vazio' })
  value: number;

  @CreateDateColumn()
  createdAT: Date;

  @UpdateDateColumn()
  updatedAT: Date;
}
