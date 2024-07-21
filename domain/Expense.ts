import { Category } from "./category";

export class Expense {
  constructor(
    public name: string,
    public value: number,
    public category?: Category
  ) {}
}
