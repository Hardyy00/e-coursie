import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src: string | null;
  username: string | null;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ src, username }) => {
  if (!username) {
    username = "user";
  }
  const defaultImage =
    "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let split = username.split(" ");
  let fallback = split[0][0];
  if (split.length > 1) {
    fallback += split[1][0];
  }
  return (
    <Avatar className="hover:scale-90 transition-scale">
      <AvatarImage src={src ?? defaultImage} />
      <AvatarFallback className="text-white  font-semibold">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
};
