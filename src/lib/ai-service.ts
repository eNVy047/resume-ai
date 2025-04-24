import { GoogleGenAI } from "@google/genai";
import { env } from "@/env";

// --- API Key Check ---
// Retrieve the API key from environment variables
const apiKey = "AIzaSyCqy3DtiW_XiLfuOTQb5QH_s-qDQZgcu7k";

// Initialize the Google GenAI client only if we have an API key
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// --- Core Content Generation Function ---
export async function generateContent(prompt: string): Promise<string> {
  if (!ai) {
    throw new Error("Google AI API is not configured. Please check your environment variables." + ai);
  }

  try {
    // Generate content using the new API
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // Basic check if the response or text is missing
    if (!response || !response.text) {
      console.warn("Google AI response or text was empty for prompt:", prompt);
      return ""; // Return empty string or handle as needed
    }

    return response.text;
  } catch (error) {
    console.error("Error generating content with Google AI:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while generating content.");
  }
}

// --- Specific Use Case Functions ---

export async function generateResumeSummary(
  jobTitle: string,
  experience: string,
  skills: string[],
): Promise<string> {
  const prompt = `Create a professional summary for a resume with the following details:
Job Title: ${jobTitle}
Experience: ${experience}
Skills: ${skills.join(", ")}

Please write a concise, compelling professional summary (around 3-4 sentences) that highlights the candidate's key expertise and value proposition for the specified job title. Focus on achievements and impact where possible.`;

  return generateContent(prompt);
}

export async function generateJobDescription(
  jobTitle: string,
  company: string,
  industry: string,
): Promise<string> {
  const prompt = `Generate a detailed and professional job description for the following position:
Job Title: ${jobTitle}
Company: ${company}
Industry: ${industry}

Please include the following sections:
1.  **Job Summary:** A brief overview of the role and its purpose within the company.
2.  **Key Responsibilities:** A bulleted list of the primary duties and tasks.
3.  **Required Qualifications:** Essential skills, experience (years), and education needed.
4.  **Preferred Qualifications:** Desirable skills, certifications, or experience that are a plus.
5.  **Company Information:** (Optional but good) A brief sentence about the company culture or mission.`;

  return generateContent(prompt);
}

export async function generateSkillsSuggestions(
  jobTitle: string,
  industry: string,
): Promise<string[]> {
  const prompt = `Suggest a list of relevant skills for the following position:
Job Title: ${jobTitle}
Industry: ${industry}

Please provide a list of 10-15 key skills, separated by newlines. Include a mix of technical (hard skills) and soft skills appropriate for this role and industry. Only list the skill names, one per line.`;

  const response = await generateContent(prompt);
  // Split by newline and filter out any empty lines resulting from the split
  return response.split("\n").map(skill => skill.trim()).filter(Boolean);
}