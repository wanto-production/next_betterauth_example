import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className=" w-full h-screen grid place-content-center">
      <h2>session: {JSON.stringify(session)}</h2>
    </main>
  );
}
