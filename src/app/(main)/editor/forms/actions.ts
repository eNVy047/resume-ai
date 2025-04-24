"use server";

import { generateContent } from "@/lib/ai-service";
import {
  GenerateSummaryInput,
  generateSummarySchema,
  GenerateWorkExperienceInput,
  generateWorkExperienceSchema,
  WorkExperience,
} from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";

export async function generateSummary(input: GenerateSummaryInput) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input);

  const prompt = `Create a professional resume summary with the following details:

Job Title: ${jobTitle || "N/A"}

Work Experience:
${workExperiences
  ?.map(
    (exp) => `
Position: ${exp.position || "N/A"} at ${exp.company || "N/A"} from ${
      exp.startDate || "N/A"
    } to ${exp.endDate || "Present"}

Description:
${exp.description || "N/A"}
`,
  )
  .join("\n\n")}

Education:
${educations
  ?.map(
    (edu) => `
Degree: ${edu.degree || "N/A"} at ${edu.school || "N/A"} from ${
      edu.startDate || "N/A"
    } to ${edu.endDate || "N/A"}
`,
  )
  .join("\n\n")}

Skills:
${skills}

Please write a concise, professional summary that highlights the candidate's expertise and value proposition.`;

  try {
    const summary = await generateContent(prompt);
    return summary;
  } catch (error) {
    console.error("Error generating summary:", error);
    throw new Error("Failed to generate summary. Please try again later.");
  }
}

export async function generateWorkExperience(
  input: GenerateWorkExperienceInput,
) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { description } = generateWorkExperienceSchema.parse(input);

  const prompt = `Generate a work experience entry based on the following description:
${description}

Please provide the information in this exact format:
Job title: [job title]
Company: [company name]
Start date: [YYYY-MM-DD] (only if provided)
End date: [YYYY-MM-DD] (only if provided)
Description: [an optimized description in bullet format]

Only include the fields that can be inferred from the provided data.`;

  try {
    const response = await generateContent(prompt);
    
    return {
      position: response.match(/Job title: (.*)/)?.[1] || "",
      company: response.match(/Company: (.*)/)?.[1] || "",
      description: (response.match(/Description:([\s\S]*)/)?.[1] || "").trim(),
      startDate: response.match(/Start date: (\d{4}-\d{2}-\d{2})/)?.[1],
      endDate: response.match(/End date: (\d{4}-\d{2}-\d{2})/)?.[1],
    } satisfies WorkExperience;
  } catch (error) {
    console.error("Error generating work experience:", error);
    throw new Error("Failed to generate work experience. Please try again later.");
  }
}
