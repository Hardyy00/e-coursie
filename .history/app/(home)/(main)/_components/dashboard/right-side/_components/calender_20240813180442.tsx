import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const Calender: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="relative w-fit">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md bg-background text-white w-full border border-red-400"
      />
    </div>
  );
};
