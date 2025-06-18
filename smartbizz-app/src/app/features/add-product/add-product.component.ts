import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product = {
    id: 0,
    itemName: '',
    price: 0,
    stockQuantity: 0
  };

  successMessage = '';

  constructor(private productService: ProductService) {}

  onSubmit(): void {
    this.productService.addProduct(this.product);
    this.successMessage = 'Product added successfully!';
    this.product = { id: 0, itemName: '', price: 0, stockQuantity: 0 }; // Reset
  }
}
