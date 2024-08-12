"use server";

import { signIn } from "@/auth";

export const sign_in = async ( signInType: string, npm install sonner) => {
  await signIn(signInType, { redirectTo: "/" });
};
