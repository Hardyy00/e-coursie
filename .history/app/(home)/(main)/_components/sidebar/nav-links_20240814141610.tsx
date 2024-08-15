import {
  LayoutDashboard,
  MessageCircleMore,
  SquarePlay,
  User,
  Users,
} from "lucide-react";
export const NavLinks: React.FC = () => {
  const links = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },

    { icon: SquarePlay, label: "All Courses", path: "/all-courses" },

    { icon: MessageCircleMore, label: "Messages", path: "/messages" },
    { icon: Users, friend: "Friends", path: "/friends" },
  ];
  return (
    <div>
      <div>
        {links.map((item, i) => (
          <Navlink {...item} />
        ))}
      </div>
    </div>
  );
};
