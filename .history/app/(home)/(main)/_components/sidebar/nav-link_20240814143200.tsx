import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavLink {
  Icon: LucideIcon;
  label: string;
  path: string;
}

export const NavLink: React.FC<NavLink> = ({ Icon, label, path }) => {
  return (
    <Link href={path}>
      <Icon />
      {label}
    </Link>
  );
};
