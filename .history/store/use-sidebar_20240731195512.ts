import { create } from "zustand";

interface State {
  collapse: boolean;
  onCollapse: () => void;
  onExpand: () => void;
}

const useSideBar = create<State>((set) => ({
  collapse: false,
  onCollapse,
}));
