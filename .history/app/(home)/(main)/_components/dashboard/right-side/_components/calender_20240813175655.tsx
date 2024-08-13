import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const Calender: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar />;
};
