interface HintProps {
  children: React.ReactNode;
  label: string;
  asChild: boolean;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export const Hint: React.FC<HintProps> = ({
  children,
  asChild,
  label,
  align,
  side,
}) => {
  return <div></div>;
};