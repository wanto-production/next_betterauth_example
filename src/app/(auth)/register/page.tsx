import { FormRegister } from "@/components/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full h-screen grid place-content-center">
      <Card>
        <CardHeader>
          <CardTitle>register</CardTitle>
        </CardHeader>
        <CardContent>
          <FormRegister />
        </CardContent>
        <CardFooter>
          <h2>
            alredy have account?{" "}
            <Link href="/login" className=" text-blue-400">
              login
            </Link>
          </h2>
        </CardFooter>
      </Card>
    </main>
  );
}
