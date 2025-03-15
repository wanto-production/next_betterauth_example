"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useActionState } from "react";
import { login, register } from "@/actions/auth";

export const FormRegister = () => {
  const [state, actionFn, pending] = useActionState(register, null);

  return (
    <form
      action={actionFn}
      className=" flex flex-col gap-3 justify-center items-start"
    >
      <Label htmlFor="email">email</Label>
      <Input type="email" name="email" id="email" required />
      <Label htmlFor="password">password</Label>
      <Input type="password" name="password" required />
      <Label htmlFor="name">name</Label>
      <Input type="text" name="name" required />
      {state?.message && <h2>{state.message}</h2>}
      <Button disabled={pending}>register</Button>
    </form>
  );
};

export const FormLogin = () => {
  const [state, actionFn, pending] = useActionState(login, null);

  return (
    <form
      action={actionFn}
      className=" flex flex-col gap-3 justify-center items-start"
    >
      <Label htmlFor="email">email</Label>
      <Input type="email" name="email" id="email" required />
      <Label htmlFor="password">password</Label>
      <Input type="password" name="password" required />

      {state?.message && <h2>{state.message}</h2>}
      <Button disabled={pending}>Login</Button>
    </form>
  );
};
