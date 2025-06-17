import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  adminName: string = "Admin";
 constructor() {}

  ngOnInit(): void {
    // You can retrieve logged-in admin info from AuthService if needed
  }

}
