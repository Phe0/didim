import { Category } from "./category";

export namespace Expense {
  export type Params = {
    name: string;
    value: number;
    category?: Category;
  };
}

export class Expense {
  name: string;
  value: number;
  category?: Category;

  constructor({ name, value, category }: Expense.Params) {
    this.name = name;
    this.value = value;
    this.category = category;
  }
}
