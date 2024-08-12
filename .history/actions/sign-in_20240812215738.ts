"use server";

import { signIn } from "@/auth";
import { toast } from "sonner";

export const sign_in = async (signInType: string) => {
  console.log("start");
  const res = await signIn(signInType, { redirectTo: "/" });

  if (res) {
    toast.success("Logged in successfully");
  }

  console.log("finished");

  return res;
};
