"use server";

import colors from "colors";
import { signIn } from "@/auth";

export const sign_in = async (signInType: string) => {
  console.log("start".red);
  const res = await signIn(signInType, { redirectTo: "/" });

  console.log("finished".red);

  return res;
};
