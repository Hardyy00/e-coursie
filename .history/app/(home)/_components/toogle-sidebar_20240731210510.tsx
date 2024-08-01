import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";

export default function ToggleSidebar() {
  return (
    <div className="w-[250px] flex items-center justify-between">
      {/* <div className="flex gap-8"> */}
      <div></div>
      <h1 className="font-extrabold text-xl">&#519;coursie</h1>

      <Button size={"sm"} variant={"ghost"}>
        <Hint>
          <ArrowLeftFromLine />
        </Hint>
      </Button>
      {/* </div> */}
    </div>
  );
}
