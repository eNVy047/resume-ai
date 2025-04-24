import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface ModernTemplateProps {
  resumeData: ResumeValues;
}

export default function ModernTemplate({ resumeData }: ModernTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-gradient-to-br from-white to-gray-50 shadow-lg"
    />
  );
} 