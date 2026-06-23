import Groq from "groq-sdk";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema"
import 'dotenv/config';
import puppeteer from "puppeteer";

const ai = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

/**
 * @name resumeGenerationSchema
 * @description resume generation schema for AI
 * @type {ZodSchema}
 * @returns {ZodSchema}
 */
const resumeGenerationSchema = z.object({
    html: z.string().describe("The HTML content of the resume which can be converted to PDF using any library like puppeteer")
});

/**
 * @name generatePdfFromHtml
 * @description generates a pdf from html
 * @param {String} htmlContent - The html content to be converted to pdf
 * @returns {Object} - The generated pdf
 */
async function generatePdfFromHtml(htmlContent) {
    let browser = null;
    try {
        browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
            headless: true
        });
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: "networkidle0" });

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" }
        });

        return pdfBuffer;

    } catch (error) {
        console.error("Error in generatePdfFromHtml:", error);
        throw error;
    } finally {
        if (browser) await browser.close();
    }
}

/**
 * @name generateResume
 * @description generates a resume for a candidate
 * @param {Object} resume - The resume of the candidate
 * @param {Object} selfDescription - The self description of the candidate
 * @param {Object} jobDescription - The job description for which the resume is to be generated
 * @returns {Object} - The generated resume in html format
 */
export const generateResumePdf = async ({ resume, selfDescription, jobDescription }) => {

    try {

        const prompt = `
Generate a professional, human-like resume structured explicitly around the target criteria below:

Candidate Details:
${resume || "Not Provided"}

Candidate Bio:
${selfDescription || "Not Provided"}  

Target Job Requirements:
${jobDescription}

OUTPUT INSTRUCTIONS:
Return a JSON object matching exactly this structure:
{
  "html": "<string containing the complete inline-styled semantic HTML resume markup>"
}

DESIGN REQUIREMENTS:
- Use clean, standard font stacks (Arial, Helvetica, or sans-serif).
- Make it highly ATS-friendly by using clean semantic text tags (h1, h2, p, ul, li). Do not obscure text inside deep CSS tricks.
- Structure it defensively to map naturally into 1-2 pages maximum under A4 dimensions.
`;

        const response = await ai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
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
        const parsedResume = JSON.parse(rawContent);

        if (!parsedResume.html) {
            throw new Error("AI engine failed to generate the required 'html' structured node map.");
        }

        const pdfBuffer = await generatePdfFromHtml(parsedResume.html);

        return pdfBuffer;

    } catch (error) {
        console.error("Error in generateResume:", error);
        throw error;
    }
};