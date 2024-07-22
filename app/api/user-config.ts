"use server";

import { userConfigAPI } from "@/api/user-config";
import { UserConfig } from "@/domain/user-config";
import { auth } from "@clerk/nextjs/server";

export async function getUserConfig() {
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");

  const userConfig = await userConfigAPI.getById(userId);
  if (!userConfig)
    return await userConfigAPI.create(new UserConfig({ id: userId }));
  return userConfig;
}
