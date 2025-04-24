import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface TechTemplateProps {
  resumeData: ResumeValues;
}

export default function TechTemplate({ resumeData }: TechTemplateProps) {
  return (
    <BaseTemplate
      resumeData={resumeData}
      className="bg-slate-900 text-white border border-slate-700"
    />
  );
} 