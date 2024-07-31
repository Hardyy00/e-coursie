import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <button className="relative p-4 flex items-center justify-between">
      <div>
        <Image src={"/google.svg"} fill alt="icon" />
      </div>

      <div>
        <p>Sign-in with Google</p>
      </div>
    </button>
  );
}
