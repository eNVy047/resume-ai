import { ResumeValues } from "@/lib/validation";

export type TemplateStyle = 'modern' | 'classic' | 'creative' | 'minimal' | 'professional';

export interface TemplateProps {
  resumeData: ResumeValues;
  className?: string;
}

export interface TemplateComponent {
  (props: TemplateProps): JSX.Element;
} 