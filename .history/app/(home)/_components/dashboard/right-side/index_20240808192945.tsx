"use client";
import { getSelf } from "@/lib/user-service";
import { useMediaQuery } from "usehooks-ts";
import UserSection from "./_components/user-sections";

const RightSide: React.FC = () => {
  const match = useMediaQuery("(max-width: 1024px)");

  return <div>{!match && <UserSection />}</div>;
};

export default RightSide;
