import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-blue-600 font-extrabold text-3xl">My Courses</h1>
      </div>

      <div>
        <div className="flex">
          <Input className="bg-muted-foreground text-white border-r-0 focus-visible:ring-0 focus-visible:ring-transparent" />

          <button className="flex items-center">
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
}
