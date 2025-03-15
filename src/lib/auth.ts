import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/db";
import { twoFactor, magicLink } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  appName: "authapp",
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    magicLink({
      sendMagicLink({ email, token, url }, request) {
        // Send email with magic link
      },
    }),
    twoFactor(),
    nextCookies(),
  ],
});
