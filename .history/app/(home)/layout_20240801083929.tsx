"use client";
import useSideBar from "@/store/use-sidebar";
import SideBar from "./_components/sidebar";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { collapse } = useSideBar((state) => state);
  const matches = useMediaQuery("(max-width: 1028px)");

  return (
    <div className="h-full flex ">
      <SideBar />

      <div className={cn("flex-1  bg-[#131063a1] ", !collapse && "p-1")}>
        <div
          className={cn(
            "bg-white h-full p-4 transition-all duration-300",
            !collapse && " rounded-[2rem]"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
