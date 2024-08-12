import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border border-black flex">
      <div>
        <h1 className="text-blue-600 font-extrabold text-3xl">My Courses</h1>
      </div>

      <div>
        <div className="flex">
          <Input className="" />

          <button className="flex items-center">
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
}