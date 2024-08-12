import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src: string;
  username: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ src, username }) => {
  let split = username.split(" ");
  let fallback = split[0][0];
  if (split.length > 1) {
    fallback = split[1][0];
  }
  return (
    <Avatar>
      <AvatarImage />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};
