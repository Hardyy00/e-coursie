"use client";
import useSideBar from "@/store/use-sidebar";
import SideBar from "./(main)/_components/sidebar";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { collapse } = useSideBar((state) => state);
  const matches = useMediaQuery("(max-width: 1028px)");

  return (
    <div className="h-full flex">
      <SideBar />

      <div
        className={cn(
          "flex-1 bg-[#131063a1] ",
          !collapse && !matches && "p-1",
          matches && "bg-background"
        )}
      >
        <div
          className={cn(
            "h- transition-all duration-300",
            !matches && "bg-white text-primary-foreground",
            !collapse && !matches && " rounded-[2rem]"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
