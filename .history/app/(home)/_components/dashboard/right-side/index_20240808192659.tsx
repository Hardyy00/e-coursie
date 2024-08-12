import { getSelf } from "@/lib/user-service";

const RightSide: React.FC = async () => {
  const user = await getSelf();
  return <div>RIght Side</div>;
};

export default RightSide;
