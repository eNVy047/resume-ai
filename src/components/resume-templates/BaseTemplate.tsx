import { ResumeValues } from "@/lib/validation";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BaseTemplateProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function BaseTemplate({ resumeData, className }: BaseTemplateProps) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    summary,
    workExperiences,
    educations,
    skills,
  } = resumeData;

  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white p-8", className)}>
      {/* Header Section */}
      <div className="mb-8 flex items-center gap-6">
        {photo && (
          <div className="h-24 w-24 overflow-hidden rounded-full">
            <Image
              src={typeof photo === "string" ? photo : URL.createObjectURL(photo)}
              alt={`${firstName} ${lastName}`}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold">
            {firstName} {lastName}
          </h1>
          {jobTitle && <p className="text-xl text-gray-600">{jobTitle}</p>}
          <div className="mt-2 space-y-1 text-sm text-gray-500">
            {(city || country) && (
              <p>
                {city}
                {city && country && ", "}
                {country}
              </p>
            )}
            {phone && <p>{phone}</p>}
            {email && <p>{email}</p>}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Summary</h2>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}

      {/* Work Experience Section */}
      {workExperiences && workExperiences.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Work Experience</h2>
          <div className="space-y-6">
            {workExperiences.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </div>
                </div>
                {exp.description && (
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {educations && educations.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Education</h2>
          <div className="space-y-4">
            {educations.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <div>
          <h2 className="mb-4 text-xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 