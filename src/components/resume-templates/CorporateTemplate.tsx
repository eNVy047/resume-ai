import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface CorporateTemplateProps {
  resumeData: ResumeValues;
}

export default function CorporateTemplate({ resumeData }: CorporateTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-white border border-gray-200 shadow-sm"
    />
  );
} 