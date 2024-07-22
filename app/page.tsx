import { redirect } from "next/navigation";
import { getUserConfig } from "./api/user-config";

export default async function Home() {
  const userConfig = await getUserConfig();

  if (userConfig.firstTimeUser) redirect("/onboarding");
  return <h1>yayyy</h1>;
}
