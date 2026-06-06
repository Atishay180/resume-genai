import { PDFParse } from "pdf-parse";
import { generateInterviewReport } from "../services/ai.service.js";
import { InterviewReport } from "../models/interviewReport.model.js";

const generateInterviewReportController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Resume file is required",
            });
        }

        const parser = new PDFParse({
            data: req.file.buffer,
        });
        const pdfData = await parser.getText();
        const resumeContent = pdfData.text;

        const { selfDescription, jobDescription } = req.body;

        const interviewReportByAI = await generateInterviewReport({
            resume: resumeContent,
            selfDescription,
            jobDescription
        });

        const interviewReport = await InterviewReport.create({
            user: req.user.id,
            resume: resumeContent,
            selfDescription,
            jobDescription,
            ...interviewReportByAI
        });

        return res.status(200).json({
            message: "Interview report generated successfully",
            interviewReport
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }

};

export { generateInterviewReportController };