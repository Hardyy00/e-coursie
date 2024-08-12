"use client";
import { useMediaQuery } from "usehooks-ts";
import UserSection from "./user-section";

const RightSide: React.FC = () => {
  const match = useMediaQuery("(max-width: 1024px)");

  return <div>{!match && <UserSection />}</div>;
};

export default RightSide;
