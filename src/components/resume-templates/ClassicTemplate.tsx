import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface ClassicTemplateProps {
  resumeData: ResumeValues;
}

export default function ClassicTemplate({ resumeData }: ClassicTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-amber-50 border border-amber-200"
    />
  );
} 