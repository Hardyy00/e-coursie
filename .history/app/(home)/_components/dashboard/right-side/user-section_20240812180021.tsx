import { UserAvatar } from "@/components/user-avatar";
import { User } from "@prisma/client";
import UserHoverCard from "./_components/user-hover-card";

interface UserSectionProps {
  user: Partial<User>;
}

const UserSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <div className="p-2 w-full border flex items-center justify-end ">
      <div className="flex space-x-2">
        <div className="flex flex-col items-end">
          <span className="font-bold">{user.name}</span>
          <span className="text-muted-foreground font-semibold">xxx</span>
        </div>

        <div>
          <UserHoverCard>
            <UserAvatar src={user.image! || null} username={user.name!} />
          </UserHoverCard>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
