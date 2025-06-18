import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../customer.service';
import { ProductService, Product } from '../product.service';
import { TransactionService } from '../transaction.service';
import { Transaction, TransactionItem } from '../../models/transaction.model';



@Component({
  selector: 'app-make-sale',
  templateUrl: './make-sale.component.html',
  styleUrls: ['./make-sale.component.css']
})
export class MakeSaleComponent implements OnInit {
  customers: Customer[] = [];
  products: Product[] = [];

  selectedCustomerId: number = 0;
  selectedProductId: number = 0;
  quantity: number = 1;

  saleItems: { product: Product, quantity: number }[] = [];
  total = 0;
  successMessage = '';

 constructor(
  private customerService: CustomerService,
  private productService: ProductService,
  private transactionService: TransactionService
) {}


  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
    this.products = this.productService.getProducts();
  }

  addItem(): void {
    const product = this.products.find(p => p.id === this.selectedProductId);
    if (product && this.quantity > 0) {
      this.saleItems.push({ product, quantity: this.quantity });
      this.total += product.price * this.quantity;
      this.quantity = 1;
    }
  }

 completeSale(): void {
  const customer = this.customers.find(c => c.id === this.selectedCustomerId);
  if (!customer) return;

 const items: TransactionItem[] = this.saleItems.map(item => ({
  productName: item.product.itemName,
  quantity: item.quantity,
  price: item.product.price * item.quantity
}));

const transaction: Transaction = {
  customerName: customer.name,
  date: new Date().toLocaleString(),
  items,
  total: this.total
};

this.transactionService.addTransaction(transaction);
  this.transactionService.addTransaction(transaction);

  this.successMessage = 'Sale completed successfully!';
  this.saleItems = [];
  this.total = 0;
  this.selectedCustomerId = 0;
  this.selectedProductId = 0;
}

  }

