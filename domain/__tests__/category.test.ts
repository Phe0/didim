import { describe, it, expect } from "vitest";
import { Category } from "../Category";

describe("Category", () => {
  it("should initiate a category", () => {
    const category = new Category({ name: "Electronics" });
    expect(category.name).toBe("Electronics");
  });
});
