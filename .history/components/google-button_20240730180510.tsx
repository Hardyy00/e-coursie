import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <Button>
      <div className="flex items-center justify-center">
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
