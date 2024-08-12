"use client";
import { useMediaQuery } from "usehooks-ts";
import UserSection from "./user-section";
import { User } from "@prisma/client";

interface RightSideProps {
  user: Partial<User>;
}

const RightSide: React.FC<RightSideProps> = ({ user }) => {
  const match = useMediaQuery("(max-width: 1024px)");

  return <div className="">{<UserSection user={user} />}</div>;
};

export default RightSide;
