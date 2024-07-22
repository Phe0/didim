import { Category } from "./category";

export interface ExpenseType {
  name: string;
  value: number;
  category?: Category;
}

export class Expense implements ExpenseType {
  name: string;
  value: number;
  category?: Category;

  constructor({ name, value, category }: ExpenseType) {
    this.name = name;
    this.value = value;
    this.category = category;
  }
}
