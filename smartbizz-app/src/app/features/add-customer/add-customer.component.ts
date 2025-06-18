import { Component } from '@angular/core';
import { CustomerService, Customer } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customer = {
    id: 0,
    name: '',
    mobile: '',
    address: ''
  };

  successMessage = '';

  constructor(private customerService: CustomerService) {}

  onSubmit(): void {
    this.customerService.addCustomer(this.customer);
    this.successMessage = 'Customer added successfully!';
    this.customer = { id: 0, name: '', mobile: '', address: '' }; // Reset form
  }
}
