import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../customer.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'mobile', 'address', 'action'];
  dataSource!: MatTableDataSource<Customer>;
  editRowId: number | null = null; // track which row is being edited
  editedCustomer: Customer = { id: 0, name: '', mobile: '', address: '' };
  customers: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    const customers = this.customerService.getCustomers();
    this.dataSource = new MatTableDataSource(customers);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id);
    this.loadCustomers();
  }
  updateCustomer(updated: Customer): void {
  const index = this.customers.findIndex((c: { id: number; }) => c.id === updated.id);
  if (index !== -1) {
    this.customers[index] = updated;
    this.saveToLocalStorage();
  }
}
  saveToLocalStorage() {
    throw new Error('Method not implemented.');
  }


  startEdit(customer: Customer): void {
    this.editRowId = customer.id;
    this.editedCustomer = { ...customer }; // copy to avoid instant change
  }

  saveEdit(): void {
    this.customerService.updateCustomer(this.editedCustomer);
    this.editRowId = null;
    this.loadCustomers();
  }

  cancelEdit(): void {
    this.editRowId = null;
  }
}
