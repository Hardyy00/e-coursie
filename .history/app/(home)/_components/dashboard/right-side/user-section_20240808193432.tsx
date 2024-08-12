import { getSelf } from "@/lib/user-service";

const UserSection = async () => {
  const self = await getSelf();
  return <div className="p-4"></div>;
};

export default UserSection;
