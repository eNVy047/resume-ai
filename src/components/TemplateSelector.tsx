import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import ModernTemplate from "./resume-templates/ModernTemplate";
import ClassicTemplate from "./resume-templates/ClassicTemplate";
import CreativeTemplate from "./resume-templates/CreativeTemplate";
import ProfessionalTemplate from "./resume-templates/ProfessionalTemplate";
import SimpleTemplate from "./resume-templates/SimpleTemplate";
import ElegantTemplate from "./resume-templates/ElegantTemplate";
import BoldTemplate from "./resume-templates/BoldTemplate";
import CleanTemplate from "./resume-templates/CleanTemplate";
import CorporateTemplate from "./resume-templates/CorporateTemplate";
import MinimalistTemplate from "./resume-templates/MinimalistTemplate";

interface TemplateSelectorProps {
  resumeData: ResumeValues;
  onTemplateSelect: (template: string) => void;
}

const templates = [
  { id: "modern", name: "Modern", component: ModernTemplate },
  { id: "classic", name: "Classic", component: ClassicTemplate },
  { id: "creative", name: "Creative", component: CreativeTemplate },
  { id: "professional", name: "Professional", component: ProfessionalTemplate },
  { id: "simple", name: "Simple", component: SimpleTemplate },
  { id: "elegant", name: "Elegant", component: ElegantTemplate },
  { id: "bold", name: "Bold", component: BoldTemplate },
  { id: "clean", name: "Clean", component: CleanTemplate },
  { id: "corporate", name: "Corporate", component: CorporateTemplate },
  { id: "minimalist", name: "Minimalist", component: MinimalistTemplate },
];

export default function TemplateSelector({
  resumeData,
  onTemplateSelect,
}: TemplateSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("modern");

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    onTemplateSelect(templateId);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {templates.map((template) => {
          const TemplateComponent = template.component;
          return (
            <Card
              key={template.id}
              className={cn(
                "p-2 cursor-pointer transition-all",
                selectedTemplate === template.id
                  ? "ring-2 ring-primary"
                  : "hover:ring-1 hover:ring-gray-200"
              )}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="aspect-[1/1.414]">
                <TemplateComponent resumeData={resumeData} />
              </div>
              <div className="mt-2 text-center text-sm font-medium">
                {template.name}
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => handleTemplateSelect(selectedTemplate)}
        >
          Apply Template
        </Button>
      </div>
    </div>
  );
} 