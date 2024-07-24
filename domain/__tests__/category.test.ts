import { Category } from "../category";

describe("Category", () => {
  it("should initiate a category", () => {
    const category = new Category({ name: "Electronics" });
    expect(category.name).toBe("Electronics");
  });
});
