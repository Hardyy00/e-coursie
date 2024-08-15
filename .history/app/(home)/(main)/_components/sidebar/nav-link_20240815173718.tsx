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
      <div className="border-white">
        <div></div>
      </div>
      <Link href={path} className="flex items-center gap-x-4 h-[3rem]">
        <Icon />
        {label}
      </Link>
    </div>
  );
};
