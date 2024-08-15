import {
  LayoutDashboard,
  MessageCircleMore,
  SquarePlay,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "./nav-link";
export const NavLinks: React.FC = () => {
  const links = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },

    { icon: SquarePlay, label: "All Courses", path: "/all-courses" },

    { icon: MessageCircleMore, label: "Messages", path: "/messages" },
    { icon: Users, label: "Friends", path: "/friends" },
  ];
  return (
    <div className="w-full my-auto  px-4 flex flex-col gap-y-12">
      {links.map((item, i) => (
        <NavLink {...item} key={i} />
      ))}
    </div>
  );
};
