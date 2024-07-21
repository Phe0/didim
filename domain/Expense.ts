import { Category } from "./Category";
import { User } from "./User";

export class Expense {
  constructor(
    public name: string,
    public value: number,
    public user: User,
    public category?: Category
  ) {}
}
