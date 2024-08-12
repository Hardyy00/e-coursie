import { UserAvatar } from "@/components/user-avatar";
import { getSelf } from "@/lib/user-service";

const UserSection = async () => {
  const self = await getSelf();
  return (
    <div className="p-4 w-full">
      <div>
        <div></div>

        <div>
          <UserAvatar src={self.image} username={self.name} />
        </div>
      </div>
    </div>
  );
};

export default UserSection;
