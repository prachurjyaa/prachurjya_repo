import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { EmployeeDashboardComponent } from './features/employee/employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './features/admin/customers/customers.component';
import { AddCustomerComponent } from './features/employee/add-customer/add-customer.component';
import { ViewProductsComponent } from './features/employee/view-products/view-products.component';
import { MakeSaleComponent } from './features/employee/make-sale/make-sale.component';
import { AddTransactionComponent } from './features/shared/add-transaction/add-transaction.component';
import { TransactionHistoryComponent } from './features/admin/transaction-history/transaction-history.component';
import { ProductsComponent } from './features/admin/products/products.component';





const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [authGuard('Admin')] },
  { path: 'employee', component: EmployeeDashboardComponent, canActivate: [authGuard('Employee')] },
  { path: 'add-customer', component: AddCustomerComponent, canActivate: [authGuard('Employee')] },
  { path: 'customers', component: CustomersComponent, canActivate: [authGuard('Admin')] },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard('Admin')] },
  { path: 'make-sale', component: MakeSaleComponent, canActivate: [authGuard('Employee')] },
  { path: 'view-products', component: ViewProductsComponent, canActivate: [authGuard('Employee')] },
  { path: 'add-transaction', component: AddTransactionComponent, canActivate: [authGuard('Admin')] },
  { path: 'transaction-history', component: TransactionHistoryComponent, canActivate: [authGuard('Admin')] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
