import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface MinimalistTemplateProps {
  resumeData: ResumeValues;
}

export default function MinimalistTemplate({ resumeData }: MinimalistTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-white border border-gray-100"
    />
  );
} 