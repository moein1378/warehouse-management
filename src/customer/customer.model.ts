import { ApiProperty } from '@nestjs/swagger';
import { CategoryModel } from 'src/category/category.model';
import { OrderModel } from 'src/order/order.model';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column()
  @ApiProperty()
  city: string;

  @Column()
  @ApiProperty()
  state: string;

  @Column()
  @ApiProperty()
  postalCode: number;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  phoneNumber: number;

  @Column()
  @ApiProperty()
  favouriteCategory: CategoryModel[];

  @Column()
  @ApiProperty()
  order: OrderModel[];
}
