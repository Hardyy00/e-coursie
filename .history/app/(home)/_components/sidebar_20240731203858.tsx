import { cn } from "@/lib/utils";

export default function SideBar() {
  return (
    <div className={cn("h-full w-[250px] bg-[#131063a1]")}>
      <ToggleSidebar />
    </div>
  );
}
