import Image from "next/image";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

interface GoogleButtonProps {
  pending: boolean;
}

export default function GoogleButton({ pending }: GoogleButtonProps) {
  return (
    <Button className="p-4 outline w-full" variant={"ghost"}>
      <div className="flex items-center justify-center space-x-8">
        <div>
          <Image src={"/google.svg"} alt={"Google"} width={32} height={32} />
        </div>

        <div>{!pending ? <p>Sign In with Google</p> : <Loader />}</div>
      </div>
    </Button>
  );
}
