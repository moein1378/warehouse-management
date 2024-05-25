import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderModel } from './order.model';
import { Repository } from 'typeorm';
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderModel)
    private repoOrder: Repository<OrderModel>,
  ) {}
  async getOrderList(): Promise<OrderModel[]> {
    return await this.repoOrder.find();
  }
  async getOrderById(id: number): Promise<OrderModel> {
    return await this.repoOrder.findOne({ where: { id } });
  }
  async addOrder(order: OrderModel): Promise<OrderModel[]> {
    await this.repoOrder.insert(order);
    return this.getOrderList();
  }
  async editOrder(order: OrderModel, id: number): Promise<OrderModel[]> {
    const foundOrder = await this.repoOrder.findOne({
      where: { id },
    });

    this.repoOrder.save({
      ...foundOrder,
      ...order,
    });

    return this.getOrderList();
  }
  async deleteOrder(id: number): Promise<OrderModel[]> {
    await this.repoOrder.delete(id);
    return this.getOrderList();
  }
}
