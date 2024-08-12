import { logout } from "@/actions/logout";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { ReactNode } from "react";

interface UserHoverCardProps {
  children: ReactNode;
}

const UserHoverCard: React.FC<UserHoverCardProps> = ({ children }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <button>{children}</button>
      </HoverCardTrigger>

      <HoverCardContent
        side="bottom"
        align="end"
        sideOffset={0}
        className="text-center space-y-4"
      >
        <Button variant={"primary"} className="w-full" asChild>
          <Link href={"/profile"}>Manage Profile</Link>
        </Button>
        <Button onClick={() => logout()} variant={"ghost"} className="w-full">
          Logout
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserHoverCard;
