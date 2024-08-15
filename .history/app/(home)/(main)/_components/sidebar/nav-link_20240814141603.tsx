import { LucideIcon } from "lucide-react";

interface NavLink {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const NavLink: React.FC<NavLink> = ({ icon, label, path }) => {
  return <div>Link</div>;
};
