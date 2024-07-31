import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button>
      <image
        src={"/public/google.svg"}
        width={"100"}
        height={"100"}
        alt="google"
      />
    </Button>
  );
}