"use server";
import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function register(_: unknown, formdata: FormData) {
  const { email, password, name } = Object.fromEntries(formdata) as {
    email: string;
    password: string;
    name: string;
  };

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        name,
        password,
      },
    });

    return { message: "berhasil register" };
  } catch (err) {
    if (err instanceof APIError) {
      return { message: err.body?.message };
    }
  }
}

export async function login(_: unknown, formdata: FormData) {
  const { email, password } = Object.fromEntries(formdata) as {
    email: string;
    password: string;
  };

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return { message: "berhasil login" };
  } catch (err) {
    if (err instanceof APIError) {
      return { message: err.body?.message };
    }
  }
}
