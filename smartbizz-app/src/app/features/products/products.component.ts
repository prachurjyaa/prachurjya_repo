import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = [];

  constructor(private productService: ProductService, private authService: AuthService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.displayedColumns = this.isAdmin()
      ? ['id', 'itemName', 'price', 'stockQuantity', 'actions']
      : ['id', 'itemName', 'price', 'stockQuantity'];
  }

  isAdmin(): boolean {
    return this.authService.getCurrentRole() === 'Admin';
  }

  editProduct(id: number): void {
    alert(`Edit product ID: ${id} (functionality coming soon)`);
  }

  deleteProduct(id: number): void {
    alert(`Delete product ID: ${id} (functionality coming soon)`);
  }
}
