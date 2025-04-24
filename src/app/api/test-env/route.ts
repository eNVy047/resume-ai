import { NextResponse } from "next/server";

export async function GET() {
  // Check if the API key is set in the environment
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  
  return NextResponse.json({
    status: apiKey ? "success" : "error",
    message: apiKey ? "API key is configured" : "API key is not configured",
    // Don't expose the actual API key in the response
    hasApiKey: !!apiKey
  });
} 