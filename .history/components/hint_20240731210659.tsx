import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface HintProps {
  children: React.ReactNode;
  label: string;
  asChild?: boolean;
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
  return (
    <TooltipProvider>
      <Tooltip delayDuration={}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>

        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
