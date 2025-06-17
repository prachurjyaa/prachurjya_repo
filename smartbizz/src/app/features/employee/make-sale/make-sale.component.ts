import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';


@Component({
  selector: 'app-make-sale',
  templateUrl: './make-sale.component.html',
  styleUrls: ['./make-sale.component.css']
})
export class MakeSaleComponent implements OnInit{
  ducts: Product[] = [];
  selectedProductId: number = 0;
  quantity: number = 1;
  totalPrice: number = 0;
  confirmationMessage: string = '';
products: any;

  constructor(private productService: ProductService,
     private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  calculateTotal() {
    const product = this.products.find((p: { id: number; }) => p.id === +this.selectedProductId);
    if (product && this.quantity > 0) {
      this.totalPrice = product.price * this.quantity;
    } else {
      this.totalPrice = 0;
    }
  }

  submitSale() {
    const product = this.products.find((p: { id: number; }) => p.id === +this.selectedProductId);
    if (product && this.quantity > 0) {
      this.confirmationMessage = `✅ Sale recorded: ${this.quantity} x ${product.name} = ₹${this.totalPrice}`;
      // Future: send sale to TransactionService or backend
    } else {
      this.confirmationMessage = '❌ Please select a product and quantity.';
    }

}
}
