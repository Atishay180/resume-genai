import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { generateInterviewReportController } from "../controllers/interview.controller.js";

const interviewRouter = Router();

/**
 * @route POST /api/v1/interview
 * @description Generate interview report on the basis of provided resume, self description and job description
 * @access Private
 */
interviewRouter.post("/", authUser, upload.single("resume"), generateInterviewReportController);

export default interviewRouter;