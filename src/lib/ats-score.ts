import { ResumeValues } from "@/lib/validation";

interface WorkExperience {
  position?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

interface Education {
  degree?: string;
  school?: string;
  startDate?: string;
  endDate?: string;
}

interface ScoreBreakdown {
  personalInfo: number;
  summary: number;
  experience: number;
  education: number;
  skills: number;
  keywords: number;
  total: number;
  feedback: string[];
}

export function calculateATSScore(resumeData: ResumeValues): ScoreBreakdown {
  const weights = {
    personalInfo: 15, // 15 points
    summary: 10,      // 10 points
    experience: 20,   // 20 points
    education: 10,    // 10 points
    skills: 10,       // 10 points
    keywords: 10      // 10 points
  };

  const feedback: string[] = [];
  const breakdown: ScoreBreakdown = {
    personalInfo: 0,
    summary: 0,
    experience: 0,
    education: 0,
    skills: 0,
    keywords: 0,
    total: 0,
    feedback: []
  };

  // Personal Information (15 points)
  if (resumeData.firstName && resumeData.lastName) {
    breakdown.personalInfo += weights.personalInfo * 0.4;
    feedback.push("✓ Name provided");
  } else {
    feedback.push("✗ Missing full name");
  }
  if (resumeData.email) {
    breakdown.personalInfo += weights.personalInfo * 0.3;
    feedback.push("✓ Email provided");
  } else {
    feedback.push("✗ Missing email");
  }
  if (resumeData.phone) {
    breakdown.personalInfo += weights.personalInfo * 0.2;
    feedback.push("✓ Phone number provided");
  } else {
    feedback.push("✗ Missing phone number");
  }
  if (resumeData.city && resumeData.country) {
    breakdown.personalInfo += weights.personalInfo * 0.1;
    feedback.push("✓ Location provided");
  } else {
    feedback.push("✗ Missing location");
  }

  // Professional Summary (10 points)
  if (resumeData.summary) {
    if (resumeData.summary.length > 100) {
      breakdown.summary = weights.summary;
      feedback.push("✓ Strong professional summary");
    } else if (resumeData.summary.length > 50) {
      breakdown.summary = weights.summary * 0.7;
      feedback.push("✓ Good professional summary");
    } else {
      breakdown.summary = weights.summary * 0.3;
      feedback.push("✗ Summary too short");
    }
  } else {
    feedback.push("✗ Missing professional summary");
  }

  // Work Experience (20 points)
  if (resumeData.workExperiences && resumeData.workExperiences.length > 0) {
    const experienceScore = resumeData.workExperiences.reduce((acc, exp) => {
      let expScore = 0;
      if (exp.company) expScore += 0.2;
      if (exp.position) expScore += 0.2;
      if (exp.startDate) expScore += 0.2;
      if (exp.description && exp.description.length > 50) expScore += 0.4;
      return acc + expScore;
    }, 0);
    breakdown.experience = (experienceScore / resumeData.workExperiences.length) * weights.experience;
    feedback.push(`✓ ${resumeData.workExperiences.length} work experience(s) listed`);
  } else {
    feedback.push("✗ No work experience listed");
  }

  // Education (10 points)
  if (resumeData.educations && resumeData.educations.length > 0) {
    const educationScore = resumeData.educations.reduce((acc, edu) => {
      let eduScore = 0;
      if (edu.school) eduScore += 0.4;
      if (edu.degree) eduScore += 0.3;
      if (edu.endDate) eduScore += 0.3;
      return acc + eduScore;
    }, 0);
    breakdown.education = (educationScore / resumeData.educations.length) * weights.education;
    feedback.push(`✓ ${resumeData.educations.length} education entry(ies) listed`);
  } else {
    feedback.push("✗ No education listed");
  }

  // Skills (10 points)
  if (resumeData.skills && resumeData.skills.length > 0) {
    const skillsScore = Math.min(resumeData.skills.length / 10, 1);
    breakdown.skills = skillsScore * weights.skills;
    feedback.push(`✓ ${resumeData.skills.length} skill(s) listed`);
  } else {
    feedback.push("✗ No skills listed");
  }

  // Keywords (10 points)
  const importantKeywords = [
    'leadership', 'management', 'communication', 'team', 'project',
    'development', 'analysis', 'problem-solving', 'technical', 'experience'
  ];
  
  const content = [
    resumeData.summary,
    ...(resumeData.workExperiences?.map(exp => exp.description) || []),
    ...(resumeData.skills || [])
  ].join(' ').toLowerCase();

  const foundKeywords = importantKeywords.filter(keyword => 
    content.includes(keyword.toLowerCase())
  );
  
  const keywordScore = foundKeywords.length / importantKeywords.length;
  breakdown.keywords = keywordScore * weights.keywords;
  feedback.push(`✓ Found ${foundKeywords.length} important keywords`);

  // Calculate total score (capped at 75)
  breakdown.total = Math.min(
    Object.values(breakdown).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0),
    75
  );

  breakdown.feedback = feedback;
  return breakdown;
} 