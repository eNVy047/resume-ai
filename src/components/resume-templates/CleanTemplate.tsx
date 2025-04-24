import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface CleanTemplateProps {
  resumeData: ResumeValues;
}

export default function CleanTemplate({ resumeData }: CleanTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-white"
    />
  );
} 