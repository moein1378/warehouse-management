import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { OrderModel } from './order.model';

@ApiTags('order')
@Controller()
export class CategoryController {
  constructor(private readonly orderService: OrderService) {}

  @Get('order/get-list')
  async getOrderList(): Promise<OrderModel[]> {
    return await this.orderService.getOrderList();
  }

  @Get('order/get-order-by-id/:id')
  async getOrderById(id: number): Promise<OrderModel> {
    return await this.orderService.getOrderById(id);
  }

  @Post('order/add-order')
  async addOrder(@Body() order: OrderModel): Promise<OrderModel[]> {
    return await this.orderService.addOrder(order);
  }
  @Put('order/edit-order/:id')
  async editOrder(
    @Body() order: OrderModel,
    @Param('id') id: number,
  ): Promise<OrderModel[]> {
    return this.orderService.editOrder(order, id);
  }
  @Delete('order/delete-order/:id')
  async deleteOrder(@Param('id') id: number): Promise<OrderModel[]> {
    return await this.orderService.deleteOrder(id);
  }
}
