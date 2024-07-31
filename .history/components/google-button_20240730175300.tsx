import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button variant={"ghost"}>
      <Image href={"/google.svg"} width={"100"} height={"100"} alt="ok" />
    </Button>
  );
}
