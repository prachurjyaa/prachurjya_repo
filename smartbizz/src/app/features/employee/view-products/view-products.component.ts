import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../models/product.model';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
   products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();

}
}
