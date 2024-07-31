import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button className="p-4 outline" variant={"ghost"}>
      <div className="flex items-center justify-center space-x-8">
        <div>
          <Image src={"/google.svg"} alt={"Google"} fill />
        </div>

        <div>
          <p>Sign In with Google</p>
        </div>
      </div>
    </Button>
  );
}
