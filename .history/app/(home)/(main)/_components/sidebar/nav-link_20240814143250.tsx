import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavLink {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const NavLink: React.FC<NavLink> = ({ icon, label, path }) => {
  return (
    <Link href={path}>
      <icon />
      {label}
    </Link>
  );
};
