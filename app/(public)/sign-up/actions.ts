"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/supabase/server";

export type SignUpState = {
  validationErrors?: {
    email?: Array<string>;
    password?: Array<string>;
  };
  serverErrors?: string;
};

export async function signup(prevState: SignUpState, formData: FormData) {
  const formSchema = z
    .object({
      email: z.coerce
        .string()
        .email({ message: "Must be a valid email." })
        .min(5, { message: "Email must have at least 5 characters." }),
      password: z
        .string()
        .min(8, { message: "Password must have at least 8 characters." }),
      confirmPassword: z
        .string()
        .min(8, { message: "Password must have at least 8 characters." }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "Passwords must match.",
      path: ["confirmPassword"],
    });

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const validatedData = formSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      validationErrors: validatedData.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return {
      serverErrors: error.message,
    };
  }

  revalidatePath("/", "layout");
  redirect("/sign-up-success");
}
