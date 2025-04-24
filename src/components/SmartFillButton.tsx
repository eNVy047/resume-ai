import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { generateContent } from "@/lib/ai-service";

interface SmartFillButtonProps {
  field: string;
  context: Record<string, string>;
  onFill: (value: string) => void;
}

export default function SmartFillButton({
  field,
  context,
  onFill,
}: SmartFillButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSmartFill = async () => {
    setIsLoading(true);
    try {
      // Create a prompt based on the field and context
      const contextString = Object.entries(context)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");

      let prompt = "";
      switch (field) {
        case "jobTitle":
          prompt = `Based on the following information: ${contextString}. Generate a professional job title that matches the person's experience and skills. Keep it concise and industry-standard.`;
          break;
        case "summary":
          prompt = `Based on the following information: ${contextString}. Write a professional summary that highlights the person's key skills, experience, and career objectives. Keep it concise (2-3 sentences) and impactful.`;
          break;
        case "skills":
          prompt = `Based on the following information: ${contextString}. List the most relevant technical and soft skills for this person's professional profile. Format as a comma-separated list.`;
          break;
        default:
          prompt = `Based on the following information: ${contextString}. Generate appropriate content for the ${field} field.`;
      }

      const generatedContent = await generateContent(prompt);
      if (generatedContent) {
        onFill(generatedContent);
      }
    } catch (error) {
      console.error("Error in smart fill:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleSmartFill}
      disabled={isLoading}
      className="ml-2"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        "Smart Fill"
      )}
    </Button>
  );
} 