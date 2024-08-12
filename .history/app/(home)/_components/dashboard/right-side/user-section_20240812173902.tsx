import { UserAvatar } from "@/components/user-avatar";
import { User } from "@prisma/client";

interface UserSectionProps {
  user: Partial<User>;
}

const UserSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <div className="p-4 w-full border ">
      <div>
        <div>
          <p>{user.name}</p>
        </div>

        <div>
          <UserAvatar src={user.image! || null} username={user.name!} />
        </div>
      </div>
    </div>
  );
};

export default UserSection;
