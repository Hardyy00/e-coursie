import {
  FolderUp,
  LayoutDashboard,
  MessageCircleMore,
  SquarePlay,
  Users,
} from "lucide-react";
import { NavLink } from "./nav-link";
import { Hint } from "@/components/hint";
export const NavLinks: React.FC = () => {
  const links = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },

    { icon: SquarePlay, label: "All Courses", path: "/all-courses" },

    { icon: MessageCircleMore, label: "Messages", path: "/messages" },
    { icon: Users, label: "Friends", path: "/friends" },
    { icon: FolderUp, label: "Uploads", path: "/uploads" },
  ];
  return (
    <>
      {links.map((item, idx) => (
        <Hint key={idx} label={item.label}>
          <NavLink {...item} />
        </Hint>
      ))}
    </>
  );
};
