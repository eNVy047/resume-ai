import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface SimpleTemplateProps {
  resumeData: ResumeValues;
}

export default function SimpleTemplate({ resumeData }: SimpleTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-white border border-gray-200"
    />
  );
} 