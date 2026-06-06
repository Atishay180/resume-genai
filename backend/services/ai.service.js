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
    matchScore: z.number().description("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),

    technicalQuestions: z.array(z.object({
        question: z.string().description("The technical question can be asked in the interview"),
        intention: z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take, etc")
    })).description("The technical questions can be asked in the interview along with their intention and how to answer them"),

    behavioralQuestion: z.array(z.object({
        question: z.string().description("The behavioral question can be asked in the interview"),
        intention: z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take, etc")
    })).description("The behavioral questions can be asked in the interview along with their intention and how to answer them"),

    skillGaps: z.array(z.object({
        skill: z.string().description("The skill which the candidate is lacking"),
        severity: z.enum(["low", "medium", "high"]).description("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).description("List of skill gaps in the candidate's profile along with their severity"),

    preparationPlan: z.array(z.object({
        day: z.number().description("The day number in the preparation plan, starting from 1"),
        focus: z.string().description("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).description("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).description("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),

    title: z.string().description("The title of the job for which the interview report is generated"),
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
        const prompt = `Generate an interview report for a candidate with the following details:
                        Resume: ${resume}
                        Self Description: ${selfDescription}
                        Job Description: ${jobDescription}
    `

        const jsonSchemaRepresentation = zodToJsonSchema(interviewReportSchema, "interviewReportSchema");

        const response = await ai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: 'user',
                    content: prompt,
                }
            ],
            response_format: {
                type: "json_schema",
                json_schema: {
                    name: "interview_report_schema",
                    strict: true, // Guarantees 100% adherence to your schema structure
                    schema: jsonSchemaRepresentation.definitions.interviewReportSchema
                }
            }
        });

        const rawContent = response.choices?.[0]?.message?.content || "{}";
        const parsedReport = JSON.parse(rawContent);

        return parsedReport;
    } catch (error) {
        console.error("Error in generateInterviewReport:", error);
    }
};