import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button>
      <image href={"/public/google.svg"} width={"100%} />
    </Button>
  );
}
