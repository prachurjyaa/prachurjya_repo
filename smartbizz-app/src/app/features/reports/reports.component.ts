import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  totalCustomers = 0;
  totalProducts = 0;
  totalSales = 0;
  totalDues = 0;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.totalCustomers = this.customerService.getCustomers().length;
    this.totalProducts = this.productService.getProducts().length;

    // Dummy summary logic for demo purpose
    const sales = [2500, 3600, 1200]; // pretend from orders
    const dues = [300, 500, 700];     // pretend from unpaid bills

    this.totalSales = sales.reduce((a, b) => a + b, 0);
    this.totalDues = dues.reduce((a, b) => a + b, 0);
  }
}
