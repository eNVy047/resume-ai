import BaseTemplate from "./BaseTemplate";
import { ResumeValues } from "@/lib/validation";

interface MinimalTemplateProps {
  resumeData: ResumeValues;
}

export default function MinimalTemplate({ resumeData }: MinimalTemplateProps) {
  return <BaseTemplate resumeData={resumeData} />;
} 