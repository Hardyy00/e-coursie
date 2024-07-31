import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button className="p-6">
      <div className="flex items-center justify-center space-x-4">
        <div>
          <Image src={"/google.svg"} alt={"Google"} width={32} height={32} />
        </div>

        <div>
          <p>Sign In with Google</p>
        </div>
      </div>
    </Button>
  );
}
