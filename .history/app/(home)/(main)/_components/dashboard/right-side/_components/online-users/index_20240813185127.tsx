import { Button } from "@/components/ui/button";

export const OnlineUsers: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between text-blue-600">
        <h2 className=" text-xl font-bold">Online Users</h2>
        <Button className="" variant={"ghost"}>
          See all{" "}
        </Button>
      </div>
    </div>
  );
};
