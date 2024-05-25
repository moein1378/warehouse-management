import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerModel } from './customer.model';
import { Repository } from 'typeorm';
@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerModel)
    private repoCustomer: Repository<CustomerModel>,
  ) {}
  async getCustomerList(): Promise<CustomerModel[]> {
    return await this.repoCustomer.find();
  }
  async getCustomerById(id: number): Promise<CustomerModel> {
    return await this.repoCustomer.findOne({ where: { id } });
  }
  async addCustomer(customer: CustomerModel): Promise<CustomerModel[]> {
    await this.repoCustomer.insert(customer);
    return this.getCustomerList();
  }
  async editCustomer(
    customer: CustomerModel,
    id: number,
  ): Promise<CustomerModel[]> {
    const foundCustomer = await this.repoCustomer.findOne({
      where: { id },
    });

    this.repoCustomer.save({
      ...foundCustomer,
      ...customer,
    });

    return this.getCustomerList();
  }
  async deleteCustomer(id: number): Promise<CustomerModel[]> {
    await this.repoCustomer.delete(id);
    return this.getCustomerList();
  }
}
