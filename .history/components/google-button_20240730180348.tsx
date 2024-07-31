import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <button>
      <div>
        <Image src={"/google.svg"} alt={"Google"} width={32} height={32} />
        <span>Sign In with Google</span>
      </div>
    </button>
  );
}
