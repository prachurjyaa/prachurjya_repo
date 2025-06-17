import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeDashboardComponent } from './features/employee/employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './features/admin/customers/customers.component';
import { AddCustomerComponent } from './features/employee/add-customer/add-customer.component';
import { ViewProductsComponent } from './features/employee/view-products/view-products.component';
import { MakeSaleComponent } from './features/employee/make-sale/make-sale.component';
import { AddTransactionComponent } from './features/shared/add-transaction/add-transaction.component';
import { TransactionHistoryComponent } from './features/admin/transaction-history/transaction-history.component';
import { ProductsComponent } from './features/admin/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    CustomersComponent,
    AddCustomerComponent,
    ViewProductsComponent,
    MakeSaleComponent,
    AddTransactionComponent,
    TransactionHistoryComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
