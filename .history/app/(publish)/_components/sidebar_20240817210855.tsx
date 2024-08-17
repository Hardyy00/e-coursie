"use client";

import { useMediaQuery } from "usehooks-ts";

export const Sidebar = () => {
  const matches = useMediaQuery("(max-width:1024px)");

  if (matches) {
    return null;
  }

  return <div className="h-full bg-white ">Sidebar</div>;
};
