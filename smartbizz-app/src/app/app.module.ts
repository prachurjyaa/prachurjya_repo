import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Forms
import { FormsModule } from '@angular/forms';
// models


// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

// Components
import { LoginComponent } from './core/login/login.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddCustomerComponent } from './features/add-customer/add-customer.component';
import { ProductComponent } from './features/products/products.component';
import { AddProductComponent } from './features/add-product/add-product.component';
import { ReportsComponent } from './features/reports/reports.component';
import { EmployeeDashboardComponent } from './features/employee-dashboard/employee-dashboard.component';
import { MakeSaleComponent } from './features/make-sale/make-sale.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { ViewProductsComponent } from './features/view-products/view-products.component';
import { CustomersComponent } from './features/customers/customers.component';
import { ChatbotComponent } from './features/chatbot/chatbot.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    NavbarComponent ,// ✅ Declare only here, not in SharedModule
    AddCustomerComponent,
    ProductComponent,
    AddProductComponent,
    ReportsComponent,
    EmployeeDashboardComponent,
    MakeSaleComponent,
    TransactionsComponent,
    ViewProductsComponent,
    CustomersComponent,
    ChatbotComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    // Angular Material Modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
