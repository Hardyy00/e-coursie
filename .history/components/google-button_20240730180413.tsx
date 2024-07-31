import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <button>
      <div>
        <Image src={"/google.svg"} alt={"Google"} width={32} height={32} />

        <div>
          <p>Sign In with Google</p>
        </div>
      </div>
    </button>
  );
}
