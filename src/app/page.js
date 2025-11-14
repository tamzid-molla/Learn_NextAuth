import LoginButton from "@/components/LoginButton";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div>
      <LoginButton></LoginButton>
      <UserInfo></UserInfo>
      <p>come from server {JSON.stringify(session) }</p>
   </div>
  );
}
