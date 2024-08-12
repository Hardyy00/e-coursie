import { UserAvatar } from "@/components/user-avatar";
import { User } from "@prisma/client";

interface UserSectionProps {
  user: Partial<User>;
}

const UserSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <div className="p-4 w-full">
      <div>
        <div></div>

        <div>
          <UserAvatar src={user.image!} username={user.name!} />
        </div>
      </div>
    </div>
  );
};

export default UserSection;
