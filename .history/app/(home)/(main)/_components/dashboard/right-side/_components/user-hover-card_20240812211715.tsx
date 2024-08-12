import { logout } from "@/actions/logout";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { ReactNode, useTransition } from "react";

interface UserHoverCardProps {
  children: ReactNode;
}

const UserHoverCard: React.FC<UserHoverCardProps> = ({ children }) => {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      logout().then(() => {});
    });
  };
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
        <h2></h2>
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
