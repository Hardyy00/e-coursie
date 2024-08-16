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
        "p-4 flex items-center transition-all duration-75 ease-in ",
        !collapse && "w-[250px] justify-between",
        collapse && "w-[50px] justify-center"
      )}
    >
      <div
        className={cn("transition-all duration-75", collapse && "hidden")}
      ></div>
      <h1
        className={cn(
          "font-extrabold text-xl transition-all duration-300",
          collapse && "hidden"
        )}
      >
        &#519;coursie
      </h1>

      <Hint label={label} side="right" asChild>
        <Button size={"sm"} variant={"ghost"}>
          <Icon className="h-5 w-5" onClick={handleClick} />
        </Button>
      </Hint>
    </div>
  );
}
