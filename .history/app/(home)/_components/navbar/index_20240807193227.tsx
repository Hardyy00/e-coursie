import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-blue-600 font-extrabold text-3xl">My Courses</h1>
      </div>

      <div className="flex space-x-4 items-center">
        <form className="flex">
          <Input className="bg-muted-foreground text-white border-r-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-0 " />

          <button
            className="flex items-center bg-muted-foreground"
            type="submit"
          >
            <Search />
          </button>
        </form>

        <div>
          <Bell />
        </div>
      </div>
    </div>
  );
}
