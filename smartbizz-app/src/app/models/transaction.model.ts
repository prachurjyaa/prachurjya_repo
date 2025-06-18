export interface TransactionItem {
  productName: string;
  quantity: number;
  price: number; // total price for this item
}

export interface Transaction {
  customerName: string;
  date: string; // can be a string like '2025-06-17 4:00 PM'
  items: TransactionItem[];
  total: number; // overall transaction total
}
