import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import ModernTemplate from "./resume-templates/ModernTemplate";
import ClassicTemplate from "./resume-templates/ClassicTemplate";
import CreativeTemplate from "./resume-templates/CreativeTemplate";
import ProfessionalTemplate from "./resume-templates/ProfessionalTemplate";
import BoldTemplate from "./resume-templates/BoldTemplate";
import CorporateTemplate from "./resume-templates/CorporateTemplate";
import MinimalistTemplate from "./resume-templates/MinimalistTemplate";

const templates = [
  { id: "modern", name: "Modern", component: ModernTemplate },
  { id: "classic", name: "Classic", component: ClassicTemplate },
  { id: "creative", name: "Creative", component: CreativeTemplate },
  { id: "professional", name: "Professional", component: ProfessionalTemplate },
  { id: "bold", name: "Bold", component: BoldTemplate },
  { id: "corporate", name: "Corporate", component: CorporateTemplate },
  { id: "minimalist", name: "Minimalist", component: MinimalistTemplate },
];

interface FooterProps {
  resumeData?: ResumeValues;
}

export default function Footer({ resumeData }: FooterProps) {
  // Fallback data if no user data is provided
  const displayData = resumeData || {
    firstName: "Your",
    lastName: "Name",
    jobTitle: "Professional Title",
    email: "email@example.com",
    phone: "+1 (555) 000-0000",
    city: "City",
    country: "Country",
    summary: "Your professional summary will appear here.",
    workExperiences: [
      {
        company: "Company Name",
        position: "Position Title",
        startDate: "Start Date",
        endDate: "Present",
        description: "Your work experience description will appear here.",
      },
    ],
    educations: [
      {
        school: "School Name",
        degree: "Degree Name",
        startDate: "Start Date",
        endDate: "End Date",
      },
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-black">
            Choose Your Perfect Resume Template
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our collection of professionally designed templates
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {templates.map((template) => {
            const TemplateComponent = template.component;
            return (
              <Card
                key={template.id}
                className="group p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden bg-white"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-lg border border-gray-200">
                  <div className="scale-[0.4] origin-top-left pointer-events-none transform transition-transform duration-300 group-hover:scale-[0.42]">
                    <TemplateComponent resumeData={displayData} />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-900 text-base">{template.name}</h3>
                  <p className="text-sm text-gray-500">Resume Template</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy">
              <Button variant="ghost" size="sm">Privacy Policy</Button>
            </Link>
            <Link href="/terms">
              <Button variant="ghost" size="sm">Terms of Service</Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 