"use client";

import { cn } from "@/lib/utils";
import ToggleSidebar from "./toogle-sidebar";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import {
  LayoutDashboard,
  MessageCircleMore,
  SquarePlay,
  User,
} from "lucide-react";

export default function SideBar() {
  const matches = useMediaQuery("(max-width : 1028px)");

  if (matches) {
    return null;
  }

  const links = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },

    { icon: SquarePlay, label: "All Courses", path: "/all-courses" },

    { icon: MessageCircleMore, label: "Messages", path: "/messages" },
    { icon: User, friend: "Friends", path: "/friends" },
  ];

  return (
    <div className={cn("h-full bg-[#131063a1] p-4 ")}>
      <ToggleSidebar />
    </div>
  );
}
