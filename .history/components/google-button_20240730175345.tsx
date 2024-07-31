import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button className="relative">
      <Image src={"/google.svg"} fill alt="ok" />
    </Button>
  );
}
