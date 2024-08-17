import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between pr-8 p-4">
      <h1 className="text-3xl text-blue-600 font-extrabold tracking-wider">
        My Publications
      </h1>

      <Button
        asChild
        variant={"primary"}
        className="bg-violet-700 font-semibold animate-pulse"
      >
        <Link href={"/publish"}>Publish a new Course</Link>
      </Button>
    </div>
  );
}
