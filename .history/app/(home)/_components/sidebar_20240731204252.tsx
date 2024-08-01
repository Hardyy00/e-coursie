import { cn } from "@/lib/utils";
import ToggleSidebar from "./toogle-sidebar";

export default function SideBar() {
  return (
    <div className={cn("h-full w-[250px] bg-[#131063a1] p-4")}>
      <ToggleSidebar />
    </div>
  );
}
