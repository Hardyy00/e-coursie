import { Button } from "@/components/ui/button";

export const OnlineUsers: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-blue-600">Online Users</h2>
        <Button>See all </Button>
      </div>
    </div>
  );
};