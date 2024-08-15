"use client";

import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const NavLink: React.FC<NavLink> = ({ icon: Icon, label, path }) => {
  const currentPath = usePathname();

  return (
    <Link href={path} className="flex items-center gap-x-4 w-9">
      {/* {currentPath == path && <div className="h-full w-4 bg-white"></div>} */}
      <Icon />
      {label}
    </Link>
  );
};
