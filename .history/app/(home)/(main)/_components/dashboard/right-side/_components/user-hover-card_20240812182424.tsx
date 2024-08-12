import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";

interface UserHoverCardProps {
  children: ReactNode;
}

const UserHoverCard: React.FC<UserHoverCardProps> = ({ children }) => {
  const handleLogout = () => {
    signOut({ redirectTo: "/" });
  };
  return (
    <HoverCard>
      <HoverCardTrigger>
        <button>{children}</button>
      </HoverCardTrigger>

      <HoverCardContent side="bottom" align="end" sideOffset={0}>
        hii
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserHoverCard;
