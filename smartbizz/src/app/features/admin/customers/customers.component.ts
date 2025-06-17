import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
editing: any;
editCustomer(_t19: number) {
throw new Error('Method not implemented.');
}
saveCustomer(_t19: number) {
throw new Error('Method not implemented.');
}
deleteCustomer(_t19: number) {
throw new Error('Method not implemented.');
}
filteredCustomers(): any {
throw new Error('Method not implemented.');
}
   customers: Customer[] = [];
searchTerm: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();

}
}
