import { UserAvatar } from "@/components/user-avatar";
import { User } from "@prisma/client";

interface UserSectionProps {
  user: Partial<User>;
}

const UserSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <div className="p-2 w-full border flex items-center justify-end ">
      <div className="flex">
        <div className="flex-col">
          <p>{user.name}</p>
          <p>xxx</p>
        </div>

        <div>
          <UserAvatar src={user.image! || null} username={user.name!} />
        </div>
      </div>
    </div>
  );
};

export default UserSection;
