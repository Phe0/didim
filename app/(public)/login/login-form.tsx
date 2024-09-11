"use client";

import { useFormState } from "react-dom";
import { login } from "./actions";
import { InputText } from "@/components/InputText";
import { AlertBox } from "@/components/AlertBox";
import { FormSubmit } from "@/components/FormSubmit";

export function LoginForm() {
  const [loginState, loginFormAction] = useFormState(login, {
    validationErrors: {},
  });

  return (
    <form action={loginFormAction} className="flex flex-col gap-2">
      <InputText
        label="Email:"
        name="email"
        errors={loginState.validationErrors?.email ?? []}
      />
      <InputText
        label="Password:"
        name="password"
        type="password"
        errors={loginState.validationErrors?.password ?? []}
      />
      <div className="flex flex-col gap-2 mt-4">
        {loginState.serverErrors && (
          <AlertBox>{loginState.serverErrors}</AlertBox>
        )}
        <FormSubmit>Log in</FormSubmit>
      </div>
    </form>
  );
}
