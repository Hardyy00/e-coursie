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
    { icon: Users, label: "Uploads", path: "/uploads" },
  ];
  return (
    <>
      {links.map((item, idx) => (
        <NavLink {...item} key={idx} />
      ))}
    </>
  );
};
