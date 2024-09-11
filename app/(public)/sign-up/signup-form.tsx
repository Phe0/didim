"use client";

import { useFormState } from "react-dom";
import { signup } from "./actions";
import { InputText } from "@/components/InputText";
import { AlertBox } from "@/components/AlertBox";
import { FormSubmit } from "@/components/FormSubmit";

export function SignUpForm() {
  const [signUpState, signUpFormAction] = useFormState(signup, {
    validationErrors: {},
  });

  return (
    <form action={signUpFormAction} className="flex flex-col gap-2">
      <InputText
        label="Email:"
        name="email"
        errors={signUpState.validationErrors?.email ?? []}
      />
      <InputText
        label="Password:"
        name="password"
        type="password"
        errors={signUpState.validationErrors?.password ?? []}
      />
      <InputText
        label="Confirm Password:"
        name="confirmPassword"
        type="password"
        errors={signUpState.validationErrors?.confirmPassword ?? []}
      />
      <div className="flex flex-col gap-2 mt-4">
        {signUpState.serverErrors && (
          <AlertBox>{signUpState.serverErrors}</AlertBox>
        )}
        <FormSubmit>Sign Up</FormSubmit>
      </div>
    </form>
  );
}
