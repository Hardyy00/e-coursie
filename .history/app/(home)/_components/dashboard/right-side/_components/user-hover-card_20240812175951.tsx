import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { ReactNode } from "react";

interface UserHoverCardProps {
  children: ReactNode;
}

const UserHoverCard: React.FC<UserHoverCardProps> = ({ children }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
    </HoverCard>
  );
};

export default UserHoverCard;
