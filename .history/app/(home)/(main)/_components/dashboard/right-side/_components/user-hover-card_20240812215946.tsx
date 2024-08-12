import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { ReactNode, useTransition } from "react";
import { toast } from "sonner";

interface UserHoverCardProps {
  children: ReactNode;
}

const UserHoverCard: React.FC<UserHoverCardProps> = ({ children }) => {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      logout()
        .then(() => toast.success("Successfully Logged Out."))
        .catch(() => toast.error("Something went wrong"));
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
        <h2>&#519;coursie</h2>
        <Button variant={"primary"} className="w-full" asChild>
          <Link href={"/profile"}>Manage Profile</Link>
        </Button>
        <Button
          onClick={handleClick}
          variant={"ghost"}
          className="w-full"
          disabled={pending}
        >
          {pending ? (
            <LoaderCircle className="animate-spin duration-300" />
          ) : (
            "Sign out"
          )}
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserHoverCard;
