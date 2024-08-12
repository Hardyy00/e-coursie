import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useSideBar from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export default function ToggleSidebar() {
  const { collapse, onExpand, onCollapse } = useSideBar((state) => state);

  const label = collapse ? "Expand" : "Collapse";
  const handleClick = () => {
    if (collapse) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  const Icon = collapse ? ArrowRightFromLine : ArrowLeftFromLine;
  return (
    <div
      className={cn(
        " flex items-center transition-all duration-150 ease-in ",
        !collapse && "w-[250px] justify-between",
        collapse && "w-[50px] justify-center"
      )}
    >
      <div className={cn("", collapse && "hidden")}></div>
      <h1 className={cn("font-extrabold text-xl", collapse && "hidden")}>
        &#519;coursie
      </h1>

      <Hint label={label} side="right" asChild>
        <Button size={"sm"} variant={"ghost"}>
          <Icon className="h-4 w-4" onClick={handleClick} />
        </Button>
      </Hint>
    </div>
  );
}
