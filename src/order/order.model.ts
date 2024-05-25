import { ApiProperty } from '@nestjs/swagger';
import { CustomerModel } from 'src/customer/customer.model';
import { ProductModel } from 'src/product/product.model';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date' })
  @ApiProperty()
  date: Date;

  @Column({ type: 'date' })
  @ApiProperty()
  shippedDate: Date;

  @Column()
  @ApiProperty()
  status: string;

  @Column()
  @ApiProperty()
  customer: CustomerModel;

  @Column()
  @ApiProperty()
  product: ProductModel[];
}
