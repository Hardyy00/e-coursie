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
  return (
    <HoverCard>
      <HoverCardTrigger>
        <button>{children}</button>
      </HoverCardTrigger>

      <HoverCardContent side="bottom" sideOffset={""}>
        Hii Hardik
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserHoverCard;
