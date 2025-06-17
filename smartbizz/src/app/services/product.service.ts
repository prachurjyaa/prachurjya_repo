import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private products: Product[] = [
    { id: 1, name: 'Rice Bag 25kg', price: 1200, stock: 10 },
    { id: 2, name: 'Cooking Oil 1L', price: 160, stock: 30 },
    { id: 3, name: 'Toothpaste', price: 55, stock: 50 },
    { id: 4, name: 'Notebook (200pg)', price: 35, stock: 100 },
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product);
  }
}
