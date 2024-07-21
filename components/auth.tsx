import { PropsWithChildren } from "react";
import { TopNav } from "./top-nav";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UserConfigAPI } from "../api/user-config";

const userConfigAPI = new UserConfigAPI();

export async function Auth({ children }: PropsWithChildren) {
  return (
    <>
      <TopNav />
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above.
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center text-2xl">{children}</div>
      </SignedIn>
    </>
  );
}
