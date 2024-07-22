import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <SignedIn>
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div className="flex flex-row">
          <UserButton />
        </div>
      </nav>
    </SignedIn>
  );
}
