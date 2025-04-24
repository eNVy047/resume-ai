import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface ElegantTemplateProps {
  resumeData: ResumeValues;
}

export default function ElegantTemplate({ resumeData }: ElegantTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm"
    />
  );
} 