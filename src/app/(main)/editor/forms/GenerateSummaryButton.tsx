import LoadingButton from "@/components/LoadingButton";
import { useToast } from "@/hooks/use-toast";
import { ResumeValues } from "@/lib/validation";
import { WandSparklesIcon } from "lucide-react";
import { useState } from "react";
import { generateResumeSummary } from "@/lib/ai-service";

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues;
  onSummaryGenerated: (summary: string) => void;
}

export default function GenerateSummaryButton({
  resumeData,
  onSummaryGenerated,
}: GenerateSummaryButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      const { jobTitle, workExperiences, skills } = resumeData;
      
      // Extract experience from work experiences
      const experience = workExperiences?.[0]?.description || "";
      
      // Generate summary using Google AI
      const summary = await generateResumeSummary(
        jobTitle || "",
        experience,
        skills || []
      );
      
      onSummaryGenerated(summary);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Failed to generate summary. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoadingButton
      variant="outline"
      type="button"
      onClick={handleClick}
      loading={loading}
    >
      <WandSparklesIcon className="size-4" />
      Generate (AI)
    </LoadingButton>
  );
}
