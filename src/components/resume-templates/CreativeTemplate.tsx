import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface CreativeTemplateProps {
  resumeData: ResumeValues;
}

export default function CreativeTemplate({ resumeData }: CreativeTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-purple-50 border border-purple-200"
    />
  );
} 