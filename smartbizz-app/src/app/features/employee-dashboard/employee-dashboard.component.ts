import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  totalCustomers = 0;
  totalProducts = 0;
  totalSales = 0;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.totalCustomers = this.customerService.getCustomers().length;
    this.totalProducts = this.productService.getProducts().length;
    this.totalSales = 22000; // Mock or fetched from service later
  }
}
