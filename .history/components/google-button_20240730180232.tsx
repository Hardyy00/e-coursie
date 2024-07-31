import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button className="relative p-4 ">
      <div className="flex items-center justify-between">
        <div>
          <Image src={"/google.svg"} fill alt="icon" />
        </div>

        <div>
          <p>Sign-in with Google</p>
        </div>
      </div>
    </Button>
  );
}
