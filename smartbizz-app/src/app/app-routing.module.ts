import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './core/auth.guard';
import { EmployeeDashboardComponent } from './features/employee-dashboard/employee-dashboard.component';
import { AddCustomerComponent } from './features/add-customer/add-customer.component';
import { ProductComponent } from './features/products/products.component';
import { AddProductComponent } from './features/add-product/add-product.component';
import { ReportsComponent } from './features/reports/reports.component';
import { MakeSaleComponent } from './features/make-sale/make-sale.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { ViewProductsComponent } from './features/view-products/view-products.component';
import { CustomersComponent } from './features/customers/customers.component';
import { ChatbotComponent } from './features/chatbot/chatbot.component';
const routes: Routes = [
  {
  path: 'login', component: LoginComponent
},
{
  path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]
},
{
  path: 'employee', component: EmployeeDashboardComponent, canActivate: [AuthGuard]
},
{ path: 'add-customer', component: AddCustomerComponent },
{ path: 'products', component: ProductComponent },
 { path: 'add-product', component: AddProductComponent },
 { path: 'reports', component: ReportsComponent },
  { path: 'make-sale', component: MakeSaleComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'view-products', component: ViewProductsComponent },
  { path: 'customers', component: CustomersComponent }, 
  { path: 'chatbot', component: ChatbotComponent },


// Redirect
{ path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
