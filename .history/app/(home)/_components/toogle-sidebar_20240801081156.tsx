import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import useSideBar from "@/store/use-sidebar";
import { ArrowLeftFromLine } from "lucide-react";

export default function ToggleSidebar() {
  const { collapse, onExpand, onCollapse } = useSideBar((state) => state);

  const label = collapse ? "Expand" : "Collapse";
  return (
    <div className="w-[250px] flex items-center justify-between">
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
