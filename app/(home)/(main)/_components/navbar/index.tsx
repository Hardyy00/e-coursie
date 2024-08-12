"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import query from "query-string";
import { ChangeEvent, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [data, setData] = useState<string>("");

  const formHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!data) {
      return;
    }

    const url = query.stringifyUrl({
      url: "/search",
      query: {
        name: data,
      },
    });

    router.push(url);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-blue-600 font-extrabold text-3xl">My Courses</h1>
      </div>

      <div className="flex space-x-4 items-center">
        <form className="flex" onSubmit={formHandle}>
          <Input
            className={cn(
              "bg-muted-foreground text-black font-semibold border-r-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-r-none border-0"
            )}
            onChange={handleChange}
          />

          <button
            className="flex items-center bg-muted-foreground border-0 rounded-r-lg p-2"
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
