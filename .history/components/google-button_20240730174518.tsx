import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleButton() {
  return (
    <button className="w-12" variant={"secondary"}>
      <image href={"/public/google.svg"} width={"100%"} />
    </button>
  );
}
