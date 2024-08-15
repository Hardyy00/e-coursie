import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavLink {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const NavLink: React.FC<NavLink> = ({ icon: Icon, label, path }) => {
  return (
    <Link href={path} className="flex p-2 items-center gap-x-4">
      <Icon />
      {label}
    </Link>
  );
};
