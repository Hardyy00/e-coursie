"use client";
import { useMediaQuery } from "usehooks-ts";
import UserSection from "./user-section";
import { User } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RightSideProps {
  user: Partial<User> | null;
  isLoggedIn: boolean;
}

const RightSide: React.FC<RightSideProps> = ({ user, isLoggedIn }) => {
  const match = useMediaQuery("(max-width: 1024px)");

  return (
    <div className={cn("flex-[0.3]")}>
      {!isLoggedIn && (
        <Button asChild>
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>
      )}
      {isLoggedIn && !match && <UserSection user={user} />}
    </div>
  );
};

export default RightSide;
