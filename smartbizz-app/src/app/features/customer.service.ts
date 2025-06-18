import { Injectable } from '@angular/core';

export interface Customer {
  id: number;
  name: string;
  mobile: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  updateCustomer(editedCustomer: Customer) {
    throw new Error('Method not implemented.');
  }
  private storageKey = 'smartbiz-customers';

  private customers: Customer[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  // ✅ Load from localStorage or use defaults
  private loadFromLocalStorage(): void {
    const savedData = localStorage.getItem(this.storageKey);
    if (savedData) {
      this.customers = JSON.parse(savedData);
    } else {
      // fallback default data
      this.customers = [
        { id: 1, name: 'Rajesh Kumar', mobile: '9876543210', address: 'Bhubaneswar' },
        { id: 2, name: 'Sunita Sahu', mobile: '8887654321', address: 'Cuttack' },
        { id: 3, name: 'Akash Das', mobile: '9090909090', address: 'Puri' },
        { id: 4, name: 'Neha Mishra', mobile: '7878787878', address: 'Rourkela' },
        { id: 5, name: 'Manas Ranjan', mobile: '7676767676', address: 'Balasore' }
      ];
      this.saveToLocalStorage();
    }
  }

  // ✅ Save current list to localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.customers));
  }

  // ✅ Get all customers
  getCustomers(): Customer[] {
    return [...this.customers];
  }

  // ✅ Add a new customer
  addCustomer(customer: Customer): void {
    const newId = this.customers.length > 0 ? Math.max(...this.customers.map(c => c.id)) + 1 : 1;
    const newCustomer = { ...customer, id: newId };
    this.customers.push(newCustomer);
    this.saveToLocalStorage();
  }

  // ✅ Delete customer by ID
  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.id !== id);
    this.saveToLocalStorage();
  }
}
