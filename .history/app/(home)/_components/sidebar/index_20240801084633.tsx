"use client";

import { cn } from "@/lib/utils";
import ToggleSidebar from "../toogle-sidebar";
import { useMediaQuery } from "usehooks-ts";

export default function SideBar() {
  const matches = useMediaQuery("(max-width : 1028px)");
  return (
    <div className={cn("h-full bg-[#131063a1] p-4 ")}>
      <ToggleSidebar />
    </div>
  );
}
