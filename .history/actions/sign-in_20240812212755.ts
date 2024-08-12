"use server";

import { signIn } from "@/auth";

export const sign_in = async (signInType: string) => {
  await signIn(signInType, { redirectTo: "/" });

  return JSON.stringify("Success");
};
