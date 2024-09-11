import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../Button";

export function FormSubmit({ children }: PropsWithChildren) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Loading..." : children}
    </Button>
  );
}
