import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiTags } from '@nestjs/swagger';
import { CustomerModel } from './customer.model';

@ApiTags('customer')
@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('customer/get-list')
  async getCustomerList(): Promise<CustomerModel[]> {
    return await this.customerService.getCustomerList();
  }

  @Get('customer/get-customer-by-id/:id')
  async getCustomerById(id: number): Promise<CustomerModel> {
    return await this.customerService.getCustomerById(id);
  }

  @Post('customer/add-customer')
  async addCustomer(@Body() category: CustomerModel): Promise<CustomerModel[]> {
    return await this.customerService.addCustomer(category);
  }
  @Put('customer/edit-customer/:id')
  async editCustomer(
    @Body() category: CustomerModel,
    @Param('id') id: number,
  ): Promise<CustomerModel[]> {
    return this.customerService.editCustomer(category, id);
  }
  @Delete('customer/delete-customer/:id')
  async deleteCustomer(@Param('id') id: number): Promise<CustomerModel[]> {
    return await this.customerService.deleteCustomer(id);
  }
}
