import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button className="relative p-4">
      <div>
        <Image src={"/google.svg"} fill alt="icon" />
      </div>
    </Button>
  );
}
