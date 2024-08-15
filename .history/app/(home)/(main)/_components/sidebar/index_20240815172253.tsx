"use client";

import { cn } from "@/lib/utils";
import ToggleSidebar from "./toogle-sidebar";
import { useMediaQuery } from "usehooks-ts";

import { NavLinks } from "./nav-links";

export default function SideBar() {
  const matches = useMediaQuery("(max-width : 1028px)");

  if (matches) {
    return null;
  }

  return (
    <div className={cn("h-full bg-[#131063a1] p-4 relative flex flex-col")}>
      <ToggleSidebar />

      <div className="h-full flex items-center justify-center border">
        <NavLinks />
      </div>
    </div>
  );
}
