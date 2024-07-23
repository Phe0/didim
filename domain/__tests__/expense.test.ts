import { describe, it, expect } from "vitest";
import { Expense } from "../expense";
import { Category } from "../category";

describe("Expense", () => {
  it("should initiate an expense with a category", () => {
    const expense = new Expense({
      name: "Laptop",
      value: 1000,
      category: new Category({ name: "Electronics" }),
    });
    expect(expense.name).toBe("Laptop");
    expect(expense.value).toBe(1000);
    expect(expense.category?.name).toBe("Electronics");
  });

  it("should initiate an expense without a category", () => {
    const expense = new Expense({
      name: "Laptop",
      value: 1000,
    });
    expect(expense.name).toBe("Laptop");
    expect(expense.value).toBe(1000);
    expect(expense.category).toBeUndefined();
  });
});
