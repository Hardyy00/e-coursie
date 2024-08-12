"use server";

import { signIn } from "@/auth";

export const sign_in = async (signInType: string) => {
  console.log("start");
  const res = await signIn(signInType, { redirectTo: "/" });

  console.log("finised");

  return res;
};
