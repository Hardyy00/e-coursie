"use client";
import { getSelf } from "@/lib/user-service";
import { useMediaQuery } from "usehooks-ts";

const RightSide: React.FC = () => {
  const match = useMediaQuery("(max-width: 1024px)");

  return <div>{!match && <UserSection />}</div>;
};

export default RightSide;
