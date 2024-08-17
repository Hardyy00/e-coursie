import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex">
      <h1 className="text-3xl text-blue-600 font-extrabold tracking-wider">
        My Publications
      </h1>

      <Button asChild>
        <Link href={"/publish"}>Publish a new Course</Link>
      </Button>
    </div>
  );
}
