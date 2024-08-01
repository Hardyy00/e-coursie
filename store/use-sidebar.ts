import { create } from "zustand";

interface State {
  collapse: boolean;
  onCollapse: () => void;
  onExpand: () => void;
}

const useSideBar = create<State>((set) => ({
  collapse: false,
  onCollapse: () => set((state) => ({ collapse: true })),
  onExpand: () => set((state) => ({ collapse: false })),
}));

export default useSideBar;
