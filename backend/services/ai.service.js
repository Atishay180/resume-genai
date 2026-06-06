import Groq from "groq-sdk";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema"
import 'dotenv/config';

const ai = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});


/**
 * @name interviewReportSchema
 * @description interview report schema for AI
 * @type {ZodSchema}
 * @returns {ZodSchema}
 */
const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),

    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take, etc")
    })).describe("The technical questions can be asked in the interview along with their intention and how to answer them"),

    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take, etc")
    })).describe("The behavioral questions can be asked in the interview along with their intention and how to answer them"),

    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum(["low", "medium", "high"]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).describe("List of skill gaps in the candidate's profile along with their severity"),

    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),

    title: z.string().describe("The title of the job for which the interview report is generated"),
});


/**
 * @name generateInterviewReport
 * @description generates an interview report for a candidate
 * @param {Object} resume - The resume of the candidate
 * @param {Object} selfDescription - The self description of the candidate
 * @param {Object} jobDescription - The job description for which the interview report is generated
 * @returns {Object} - The generated interview report
 */
export const generateInterviewReport = async ({ resume, selfDescription, jobDescription }) => {

    try {

        const prompt = `
You are an expert technical interviewer and hiring manager.

Analyze the candidate information below and generate an interview preparation report.

Candidate Resume:
${resume}

Candidate Self Description:
${selfDescription}

Job Description:
${jobDescription}

Return ONLY valid JSON with the following structure:

{
  "matchScore": number, // A score between 0 and 100 indicating how well the candidate's profile matches the job description.
  "technicalQuestions": [ // The technical questions that can be asked in the interview along with their intention and how to answer them.
    {
      "question": string, // The technical question that can be asked in the interview.
      "intention": string, // The intention of the interviewer behind asking this question.
      "answer": string // How to answer this question, what points to cover, what approach to take, etc.
    }
  ],
  "behavioralQuestions": [ // The behavioral questions that can be asked in the interview along with their intention and how to answer them.
    {
      "question": string, // The behavioral question that can be asked in the interview.
      "intention": string, // The intention of the interviewer behind asking this question.
      "answer": string // How to answer this question, what points to cover, what approach to take, etc.
    }
  ],
  "skillGaps": [ // List of skill gaps in the candidate's profile along with their severity.
    {
      "skill": string, // The skill which the candidate is lacking.
      "severity": "low" | "medium" | "high" // The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances.
    }
  ],
  "preparationPlan": [ // A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively.
    {
      "day": number, // The day number in the preparation plan, starting from 1.
      "focus": string, // The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc.
      "tasks": [string] // List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.
    }
  ],
  "title": string // The title of the job for which the interview report is generated.
}

Do not include markdown.
Do not wrap JSON in backticks.
Return only JSON.
`

        const jsonSchemaRepresentation = zodToJsonSchema(interviewReportSchema, "interviewReportSchema");

        const response = await ai.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: 'user',
                    content: prompt,
                }
            ],
            response_format: {
                type: "json_object",
            }
        });

        const rawContent = response.choices?.[0]?.message?.content || "{}";
        const parsedReport = JSON.parse(rawContent);

        // Validate AI response
        const validatedReport = interviewReportSchema.parse(parsedReport);

        return validatedReport;
    } catch (error) {
        console.error("Error in generateInterviewReport:", error);
        throw error;
    }
};