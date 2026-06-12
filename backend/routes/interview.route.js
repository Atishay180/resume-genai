import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { generateInterviewReportController, getInterviewReportByIdController, getAllInterviewReportsController } from "../controllers/interview.controller.js";

const interviewRouter = Router();

/**
 * @route POST /api/v1/interview
 * @description Generate interview report on the basis of provided resume, self description and job description
 * @access Private
 */
interviewRouter.post("/report", authUser, upload.single("resume"), generateInterviewReportController);

/**
 * @route GET /api/v1/interview/report/:interview-report-id
 * @description Get interview report by id
 * @access Private
 */
interviewRouter.get("/report/:interviewId", authUser, getInterviewReportByIdController);

/**
 * @route GET /api/v1/interview/reports
 * @description Get all interview reports
 * @access Private
 */
interviewRouter.get("/reports", authUser, getAllInterviewReportsController);

export default interviewRouter;