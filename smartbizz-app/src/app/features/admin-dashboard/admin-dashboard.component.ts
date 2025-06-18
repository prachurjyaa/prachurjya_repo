import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalCustomers: number = 5;
  totalProducts: number = 8;
  totalSales: number = 25000;
  totalDue: number = 4500;

  constructor() {}

  ngOnInit(): void {}
}
