"use server";

import { signIn } from "@/auth";

export const sign_in = async (signInType: string) => {
  const res = await signIn(signInType, { redirectTo: "/" });

  return res;
};
