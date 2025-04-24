import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface BoldTemplateProps {
  resumeData: ResumeValues;
}

export default function BoldTemplate({ resumeData }: BoldTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-black text-white shadow-xl"
    />
  );
} 