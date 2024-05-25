import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductModel } from './product.model';
import { CategoryModel } from 'src/category/category.model';

@ApiTags('product')
@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('product/get-list')
  async getProductList(): Promise<ProductModel[]> {
    return await this.productService.getProductList();
  }

  @Get('product/get-product-by-id/:id')
  async getProductById(id: number): Promise<ProductModel> {
    return await this.productService.getProductById(id);
  }

  @Post('product/add-product')
  async addProduct(@Body() product: ProductModel): Promise<ProductModel[]> {
    return await this.productService.addProduct(product);
  }
  @Put('product/edit-product/:id')
  async editProduct(
    @Body() product: ProductModel,
    @Param('id') id: number,
  ): Promise<ProductModel[]> {
    return this.productService.editProduct(product, id);
  }
  @Delete('product/delete-product/:id')
  async deleteProduct(@Param('id') id: number): Promise<ProductModel[]> {
    return await this.productService.deleteProduct(id);
  }

  @Post('product/add-category/:id')
  async addCategoryToProduct(
    @Body() category: CategoryModel,
    @Param('id') id: number,
  ): Promise<ProductModel[]> {
    return this.productService.addCategoryToProduct(category, id);
  }

  @Delete('product/delete-category/:id')
  async deleteCategoryFromProduct(
    @Body() category: CategoryModel,
    @Param('id') id: number,
  ): Promise<ProductModel[]> {
    return this.productService.deleteCategoryFromProduct(category, id);
  }
}
