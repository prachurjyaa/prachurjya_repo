import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { Customer } from 'src/app/models/customer.model';
import { Product } from 'src/app/models/product.model';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  customers: Customer[] = [];
  products: Product[] = [];

  selectedCustomerId: number = 0;
  selectedProductId: number = 0;
  quantity: number = 1;
  total: number = 0;
  message = '';

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
    this.products = this.productService.getProducts();
  }

  calculateTotal(): void {
    const product = this.products.find(p => p.id === +this.selectedProductId);
    if (product) {
      this.total = this.quantity * product.price;
    } else {
      this.total = 0;
    }
  }

  recordTransaction(): void {
    const customer = this.customers.find(c => c.id === +this.selectedCustomerId);
    const product = this.products.find(p => p.id === +this.selectedProductId);

    if (!customer || !product || this.quantity <= 0) {
      this.message = '❌ Please select valid entries.';
      return;
    }

    this.message = `✅ Transaction recorded: ${this.quantity} × ${product.name} for ${customer.name} = ₹${this.total}`;
    
    // Future: save to transaction service or backend
  }
}
