import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button className="relative px-4">
      <Image src={"/google.svg"} fill alt="icon" />
    </Button>
  );
}
