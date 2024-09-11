import { LoginForm } from "./login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="bg-white p-4 mx-auto rounded-lg w-1/2 my-10 flex flex-col gap-4">
      <h1 className="font-bold text-black text-2xl mx-auto">Login</h1>
      <LoginForm />
      <Link className="text-black underline mx-auto" href="/sign-up">
        Create an account
      </Link>
    </section>
  );
}
