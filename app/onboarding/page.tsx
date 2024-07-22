import { currentUser } from "@clerk/nextjs/server";
import { getUserConfig } from "../api/user-config";

export default async function OnboardingPage() {
  const userConfig = await getUserConfig();

  return <h1>Onboarding</h1>;
}
