import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const Calender: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="w-full">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-background text-white w-full border border-white"
      />
    </div>
  );
};
