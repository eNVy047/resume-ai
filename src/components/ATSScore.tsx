import { cn } from "@/lib/utils";

interface ATSScoreProps {
  score: number;
  className?: string;
}

export default function ATSScore({ score, className }: ATSScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  const getScoreText = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs Improvement";
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">ATS Score</h3>
        <span className="text-sm font-semibold">{score}/100</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className={cn(
            "absolute left-0 top-0 h-full rounded-full transition-all duration-500",
            getScoreColor(score)
          )}
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="text-xs text-gray-500">
        {getScoreText(score)} - {score >= 60 ? "Your resume is well-optimized for ATS" : "Consider adding more relevant content"}
      </p>
    </div>
  );
} 