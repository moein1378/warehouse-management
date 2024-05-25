import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryModel } from './category.model';
import { Repository } from 'typeorm';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryModel)
    private repoCategory: Repository<CategoryModel>,
  ) {}
  async getCategoryList(): Promise<CategoryModel[]> {
    return await this.repoCategory.find();
  }
  async getCategoryById(id: number): Promise<CategoryModel> {
    return await this.repoCategory.findOne({ where: { id } });
  }
  async addCategory(category: CategoryModel): Promise<CategoryModel[]> {
    await this.repoCategory.insert(category);
    return this.getCategoryList();
  }
  async editCategory(
    category: CategoryModel,
    id: number,
  ): Promise<CategoryModel[]> {
    const foundCategory = await this.repoCategory.findOne({
      where: { id },
    });

    this.repoCategory.save({
      ...foundCategory,
      ...category,
    });

    return this.getCategoryList();
  }
  async deleteCategory(id: number): Promise<CategoryModel[]> {
    await this.repoCategory.delete(id);
    return this.getCategoryList();
  }
}
