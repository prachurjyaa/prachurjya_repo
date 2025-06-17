import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  getAll(): Transaction[] {
    return [...this.transactions];
  }

  add(transaction: Transaction): void {
    transaction.id = this.transactions.length + 1;
    transaction.date = new Date().toLocaleString();
    this.transactions.push(transaction);
  }

  clear(): void {
    this.transactions = [];
  }
}
