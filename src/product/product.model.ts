import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryModel } from '../category/category.model';

@Entity()
export class ProductModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  quantity: number;

  @Column()
  @ApiProperty()
  category: CategoryModel[];
}
