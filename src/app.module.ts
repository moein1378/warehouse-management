import { Module } from '@nestjs/common';

import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModel } from './product/product.model';

import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { CategoryModel } from './category/category.model';

import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerModel } from './customer/customer.model';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'moein',
      password: '123456',
      database: 'db_warehouse',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProductModel, CategoryModel, CustomerModel]),
  ],
  controllers: [ProductController, CategoryController, CustomerController],
  providers: [ProductService, CategoryService, CustomerService],
})
export class AppModule {}
