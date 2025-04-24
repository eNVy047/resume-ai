import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  feedback?: string[];
}

export default function CircularProgress({
  value,
  size = 40,
  strokeWidth = 4,
  className,
  feedback = [],
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const getColor = (value: number) => {
    if (value >= 60) return "stroke-green-500";
    if (value >= 40) return "stroke-yellow-500";
    return "stroke-red-500";
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className={cn("relative inline-flex", className)}>
            <svg width={size} height={size} className="transform -rotate-90">
              <circle
                className="stroke-gray-200"
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
              <circle
                className={cn("transition-all duration-500", getColor(value))}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
            </svg>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">
              {value}%
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs space-y-2 p-2">
          <div className="text-sm font-medium">ATS Score Breakdown</div>
          <div className="space-y-1 text-xs">
            {feedback.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                {item}
              </div>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
} 