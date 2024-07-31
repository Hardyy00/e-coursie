"use server";

import { auth } from "@/auth";
import { db } from "./db";

export const getSelf = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("Not Logged In");
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user?.id,
    },

    select: {
      id: true,
      email: true,
      image: true,
      name: true,
    },
  });

  if (!user) {
    throw new Error("No such user exists");
  }

  return user;
};
