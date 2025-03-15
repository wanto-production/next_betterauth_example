import { FormLogin } from "@/components/form";
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
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
        <CardFooter>
          <h2>
            does'nt have account?{" "}
            <Link className="text-blue-400" href="/register">
              register
            </Link>
          </h2>
        </CardFooter>
      </Card>
    </main>
  );
}
