import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import ResumePreview from "../ResumePreview";
import { TemplateStyle } from "./types";

interface TemplateSelectorProps {
  resumeData: ResumeValues;
  selectedTemplate?: TemplateStyle;
  onTemplateChange: (template: TemplateStyle) => void;
}

export default function TemplateSelector({
  resumeData,
  selectedTemplate = "modern",
  onTemplateChange,
}: TemplateSelectorProps) {
  const [deviceSize, setDeviceSize] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const templates: { id: TemplateStyle; name: string }[] = [
    { id: "modern", name: "Modern" },
    { id: "classic", name: "Classic" },
    { id: "creative", name: "Creative" },
    { id: "minimal", name: "Minimal" },
    { id: "professional", name: "Professional" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {templates.map((template) => (
            <Button
              key={template.id}
              variant={selectedTemplate === template.id ? "default" : "outline"}
              size="sm"
              onClick={() => onTemplateChange(template.id)}
            >
              {template.name}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            variant={deviceSize === "desktop" ? "default" : "outline"}
            size="sm"
            onClick={() => setDeviceSize("desktop")}
          >
            <Monitor className="h-4 w-4" />
          </Button>
          <Button
            variant={deviceSize === "tablet" ? "default" : "outline"}
            size="sm"
            onClick={() => setDeviceSize("tablet")}
          >
            <Tablet className="h-4 w-4" />
          </Button>
          <Button
            variant={deviceSize === "mobile" ? "default" : "outline"}
            size="sm"
            onClick={() => setDeviceSize("mobile")}
          >
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "mx-auto",
          deviceSize === "desktop" && "max-w-3xl",
          deviceSize === "tablet" && "max-w-xl",
          deviceSize === "mobile" && "max-w-sm"
        )}
      >
        <ResumePreview
          resumeData={resumeData}
          template={selectedTemplate}
          className={cn(
            deviceSize === "desktop" && "scale-100",
            deviceSize === "tablet" && "scale-75",
            deviceSize === "mobile" && "scale-50"
          )}
        />
      </div>
    </div>
  );
} 