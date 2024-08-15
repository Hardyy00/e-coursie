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
    <div>
      <Link href={path} className="flex items-center gap-x-4 h-[3rem]">
        {currentPath == path && (
          <div className="h-full w-[2rem] bg-white"></div>
        )}
        <Icon />
        {label}
      </Link>
    </div>
  );
};
