import { cn } from "@/lib/utils";
import ToggleSidebar from "./toogle-sidebar";

export default function SideBar() {
  return (
    <div
      className={cn("h-full bg-[#131063a1] p-4 transition-all duration-300")}
    >
      <ToggleSidebar />
    </div>
  );
}
