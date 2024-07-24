import { render } from "@testing-library/react";
import Home from "../page";
import { ClerkProvider } from "@clerk/nextjs";

const mockAuth = jest.fn();

jest.doMock("@clerk/nextjs/server", () => ({
  auth: mockAuth,
}));

function renderHome() {
  return render(
    <ClerkProvider>
      <Home />
    </ClerkProvider>
  );
}

describe("Home Page", () => {
  it("should authorize user", async () => {
    mockAuth.mockReturnValue({ userId: "123" });

    renderHome();

    expect(mockAuth).toHaveBeenCalled();
  });
});
