"use server";

import { signIn } from "@/auth";
import { toast } from "sonner";

export const sign_in = async (signInType: string) => {
  const res = await signIn(signInType, { redirectTo: "/" });

  return res;
};
