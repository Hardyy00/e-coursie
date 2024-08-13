"use client";
import { useMediaQuery } from "usehooks-ts";
import UserSection from "./user-section";
import { User } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calender } from "./_components/calender";

interface RightSideProps {
  user: Partial<User> | null;
  isLoggedIn: boolean;
}

const RightSide: React.FC<RightSideProps> = ({ user, isLoggedIn }) => {
  const match = useMediaQuery("(max-width: 1024px)");

  return (
    <div className={cn("flex-[0.3] bg-foreground p-4")}>
      {!isLoggedIn && (
        <div className="w-full flex px-2 items-center justify-center space-x-4">
          <h2 className="font-extrabold text-muted-foreground">
            Sign-in to continue
          </h2>
          <Button asChild variant={"primary"}>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </div>
      )}
      {isLoggedIn && !match && <UserSection user={user} />}

      <div className="">
        <div className="p-4 rounded-md bg-white w-fit flex justify-center">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
