import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model'; // ✅ Correct path

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }
}
