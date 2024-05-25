import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { CategoryModel } from './category.model';

@ApiTags('category')
@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('category/get-list')
  async getCategoryList(): Promise<CategoryModel[]> {
    return await this.categoryService.getCategoryList();
  }

  @Get('category/get-category-by-id/:id')
  async getCategoryById(id: number): Promise<CategoryModel> {
    return await this.categoryService.getCategoryById(id);
  }

  @Post('category/add-category')
  async addCategory(@Body() category: CategoryModel): Promise<CategoryModel[]> {
    return await this.categoryService.addCategory(category);
  }
  @Put('category/edit-category/:id')
  async editCategory(
    @Body() category: CategoryModel,
    @Param('id') id: number,
  ): Promise<CategoryModel[]> {
    return this.categoryService.editCategory(category, id);
  }
  @Delete('category/delete-category/:id')
  async deleteCategory(@Param('id') id: number): Promise<CategoryModel[]> {
    return await this.categoryService.deleteCategory(id);
  }
}
