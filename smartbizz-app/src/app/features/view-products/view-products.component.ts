import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'itemName', 'price', 'stockQuantity'];
  dataSource!: MatTableDataSource<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.dataSource = new MatTableDataSource(products);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
