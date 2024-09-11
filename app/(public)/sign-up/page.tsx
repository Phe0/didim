import Link from "next/link";
import { SignUpForm } from "./signup-form";

export default function LoginPage() {
  return (
    <section className="bg-white p-4 mx-auto rounded-lg w-1/2 my-10 flex flex-col gap-4">
      <h1 className="font-bold text-black text-2xl mx-auto">Sign Up</h1>
      <SignUpForm />
      <Link className="text-black underline mx-auto" href="/login">
        Login
      </Link>
    </section>
  );
}
