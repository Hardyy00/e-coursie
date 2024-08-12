"use client";
import { useMediaQuery } from "usehooks-ts";
import UserSection from "./user-section";
import { User } from "@prisma/client";
import { cn } from "@/lib/utils";

interface RightSideProps {
  user: Partial<User>;
  isLoggedIn: boolean;
}

const RightSide: React.FC<RightSideProps> = ({ user, isLoggedIn }) => {
  const match = useMediaQuery("(max-width: 1024px)");

  return (
    <div className={cn("flex-[0.3]")}>
      {isLoggedIn && !match && <UserSection user={user} />}
    </div>
  );
};

export default RightSide;
