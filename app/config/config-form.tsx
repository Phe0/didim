"use client";
import { UserConfig } from "@/domain/user-config";
import { updateIncome } from "./actions";
import { useFormStatus } from "react-dom";

export function ConfigForm() {
  const { pending } = useFormStatus();
  return (
    <form action={updateIncome}>
      <label>
        Income:{" "}
        <input
          className="text-black"
          type="number"
          name="income"
          defaultValue="123"
        />
      </label>
      <input type="hidden" name="userId" value="123" />
      <button type="submit">Save</button>
    </form>
  );
}
