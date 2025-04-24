import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface ProfessionalTemplateProps {
  resumeData: ResumeValues;
}

export default function ProfessionalTemplate({ resumeData }: ProfessionalTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="border-l-4 border-blue-600 bg-white"
    />
  );
} 