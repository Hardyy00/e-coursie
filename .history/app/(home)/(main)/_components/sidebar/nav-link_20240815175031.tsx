"use client";

import { cn } from "@/lib/utils";
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
  const onPath = currentPath === path;

  return (
    <div className="flex">
      <div className="border-white w-[4rem]">
        {onPath && (
          <div className="w-1/4 bg-white h-full rounded-tr-2xl rounded-br-2xl transition-all duration-300"></div>
        )}
      </div>
      <Link
        href={path}
        className={cn(
          "flex items-center gap-x-4 h-[3rem] transition-all duration-300 w-full",
          onPath && "bg-white text-black rounded-tl-2xl rounded-bl-2xl px-6"
        )}
      >
        <Icon />
        {label}
      </Link>
    </div>
  );
};