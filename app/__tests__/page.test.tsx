import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Page", () => {
  it("should render correctly", () => {
    render(<Home />);

    expect(screen.getByText("yayyy")).toBeDefined();
  });

  it("should redirect to /onboarding ig user does not exist", () => {
    render(<Home />);
  });
});
