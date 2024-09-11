"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/supabase/server";

export type LoginState = {
  validationErrors?: {
    email?: Array<string>;
    password?: Array<string>;
  };
  serverErrors?: string;
};

export async function login(prevState: LoginState, formData: FormData) {
  const formSchema = z.object({
    email: z.coerce
      .string()
      .email({ message: "Must be a valid email." })
      .min(5, { message: "Email must have at least 5 characters." }),
    password: z
      .string()
      .min(8, { message: "Password must have at least 8 characters." }),
  });

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validatedData = formSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      validationErrors: validatedData.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      serverErrors: error.message,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  console.log(data);

  const { error } = await supabase.auth.signUp(data);

  console.log(error);

  if (error) {
    revalidatePath("/error");
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
