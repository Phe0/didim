import { Category } from "./category";
import { User } from "./user";

export class Expense {
  constructor(
    public name: string,
    public value: number,
    public user: User,
    public category?: Category
  ) {}
}
