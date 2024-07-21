"use server";
import { userConfigAPI } from "@/api/user-config";
import { auth } from "@clerk/nextjs/server";

export async function updateIncome(formData: FormData) {
  const { userId } = auth();
  const income = formData.get("income") as string;
  if (!income || !userId) return;
  const result = await userConfigAPI.update({ id: userId, income });
  if (!result) throw new Error("Failed to update income");
}
