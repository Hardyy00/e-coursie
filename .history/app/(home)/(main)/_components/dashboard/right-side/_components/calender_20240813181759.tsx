"use client";

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
        className="rounded-md bg-card-foreground text-purple-400 mx-auto"
      />
    </div>
  );
};