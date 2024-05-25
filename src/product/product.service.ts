import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductModel } from './product.model';
import { Repository } from 'typeorm';
import { CategoryModel } from 'src/category/category.model';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductModel)
    private repoProduct: Repository<ProductModel>,
  ) {}
  async getProductList(): Promise<ProductModel[]> {
    return await this.repoProduct.find();
  }
  async getProductById(id: number): Promise<ProductModel> {
    return await this.repoProduct.findOne({ where: { id } });
  }
  async addProduct(product: ProductModel): Promise<ProductModel[]> {
    await this.repoProduct.insert(product);
    return this.getProductList();
  }
  async editProduct(
    product: ProductModel,
    id: number,
  ): Promise<ProductModel[]> {
    const foundProduct = await this.repoProduct.findOne({
      where: { id },
    });

    this.repoProduct.save({
      ...foundProduct,
      ...product,
    });

    return this.getProductList();
  }
  async deleteProduct(id: number): Promise<ProductModel[]> {
    await this.repoProduct.delete(id);
    return this.getProductList();
  }

  async addCategoryToProduct(
    category: CategoryModel,
    id: number,
  ): Promise<ProductModel[]> {
    const foundProduct = await this.repoProduct.findOne({
      where: { id },
    });
    foundProduct.category.push(category);
    this.repoProduct.save({
      ...foundProduct,
    });
    return this.getProductList();
  }

  async deleteCategoryFromProduct(
    category: CategoryModel,
    id: number,
  ): Promise<ProductModel[]> {
    const foundProduct = await this.repoProduct.findOne({
      where: { id },
    });
    foundProduct.category = foundProduct.category.filter((cat) => {
      return cat.id != category.id;
    });
    this.repoProduct.save({
      ...foundProduct,
    });
    return this.getProductList();
  }
}
