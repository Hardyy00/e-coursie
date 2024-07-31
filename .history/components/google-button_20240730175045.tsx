import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button asChild>
      <image href={"/public/google.svg"} className="w-[3rem] h-[3rem]" />
    </Button>
  );
}
