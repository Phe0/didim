import { UserConfig } from "@/domain/user-config";
import { auth } from "@clerk/nextjs/server";
import { userConfigAPI } from "@/api/user-config";
import { useState } from "react";
import { ConfigForm } from "./config-form";

async function getUserConfig(id: string) {
  "use server";
  const userConfig = await userConfigAPI.getById(id);
  if (!userConfig) return await userConfigAPI.create(new UserConfig(id));
  return userConfig;
}

export default async function ConfigPage() {
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");

  const userConfig = await getUserConfig(userId);
  if (!userConfig) throw new Error("User config not found");

  return (
    <>
      <h1>Config Page</h1>
      <ConfigForm />
    </>
  );
}
