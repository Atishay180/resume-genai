import mongoose from "mongoose";

/**
 * @name technicalQuestionSchema
 * @description subschema for technical questions
 */
const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"],
    },
    intention: {
        type: String,
        required: [true, "Intention is required"],
    },
    answer: {
        type: String,
        required: [true, "Answer is required"],
    }
}, { _id: false });

/**
 * @name behavioralQuestionSchema
 * @description subschema for behavioral questions
 */
const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"],
    },
    intention: {
        type: String,
        required: [true, "Intention is required"],
    },
    answer: {
        type: String,
        required: [true, "Answer is required"],
    }
}, { _id: false });

/**
 * @name skillGapSchema
 * @description subschema for skill gaps
 */
const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"],
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required"],
        lowercase: true
    }
}, { _id: false });

/**
 * @name preparationPlanSchema
 * @description subschema for preparation plans
 */
const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"],
    },
    focus: {
        type: String,
        required: [true, "Focus is required"],
    },
    tasks: [{
        type: String,
        required: [true, "Task is required"],
    }]
}, { _id: false });



/**
 * @name interviewReportSchema
 * @description interview report schema
 */
const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"],
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlans: [preparationPlanSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Job title is required"],
    }
}, { timestamps: true });


export const InterviewReport = mongoose.models.InterviewReport || mongoose.model("InterviewReport", interviewReportSchema);
