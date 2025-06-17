import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
toggleForm() {
throw new Error('Method not implemented.');
}
customer: Customer = { id: 0, name: '', mobile: '', address: '' };
  message = '';
showForm: any;

  constructor(private customerService: CustomerService) {}

  addCustomer() {
    this.customerService.addCustomer(this.customer);
    this.message = 'Customer added successfully!';
    this.customer = { id: 0, name: '', mobile: '', address: '' }; // reset
  }
}
