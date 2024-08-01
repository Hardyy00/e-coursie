import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useSideBar from "@/store/use-sidebar";
import { ArrowLeftFromLine } from "lucide-react";

export default function ToggleSidebar() {
  const { collapse, onExpand, onCollapse } = useSideBar((state) => state);

  const label = collapse ? "Expand" : "Collapse";
  return (
    <div
      className={cn(
        " flex items-center justify-between",
        !collapse && "w-[250px]",
        collapse && "w-[50px]"
      )}
    >
      {/* <div className="flex gap-8"> */}
      <div></div>
      <h1 className="font-extrabold text-xl">&#519;coursie</h1>

      <Hint label={label} side="right" asChild>
        <Button size={"sm"} variant={"ghost"}>
          <ArrowLeftFromLine className="h-5 w-5" />
        </Button>
      </Hint>

      {/* </div> */}
    </div>
  );
}
