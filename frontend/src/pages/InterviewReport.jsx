import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useServices } from "../hooks/useServices";
import ErrorState from "../components/common/ErrorState";
import InterviewReportSkeleton from "../components/skeletons/InterviewReportSkeleton";
import InterviewReportLayout from "../components/features/InterviewReportLayout";

const InterviewReport = () => {

    const { interviewReportId } = useParams();

    const [activeSection, setActiveSection] = useState("technical");

    const { currentInterviewReport, isLoadingDetail, isErrorDetail, errorDetail } = useServices(interviewReportId);

    const reduxInterviewReport = useSelector((state) => state.interviewReport.interviewReportResponse);

    const interviewReportResponse =
        currentInterviewReport?.interviewReport ||
        reduxInterviewReport;

    // const interviewReportResponse = {
    //     _id: "6a2e3640e8cb6a8da61383c5",
    //     matchScore: 45,
    //     technicalQuestions: [
    //         {
    //             question: "Can you explain how you would structure a MERN stack application to ensure maintainability and scalability?",
    //             intention: "Assess candidate's architectural thinking and knowledge of separation of concerns across layers.",
    //             answer: "Start with a clear folder structure separating client and server. Use a React frontend with functional components and hooks, a Node/Express server exposing RESTful APIs, and MongoDB for persistence. Apply the MVC or Clean Architecture pattern: models for data, controllers for business logic, and routes for API endpoints. Leverage environment variables for configuration, use a central config module, and implement middleware for authentication and logging. Adopt a component-based UI with reusable components, context or Redux for state, and prop drilling avoidance. For scalability, implement pagination, indexing in MongoDB, and consider horizontal scaling of Node processes using PM2 or Docker Swarm. Also discuss unit, integration, and end-to-end testing coverage and CI/CD pipelines for continuous deployment."
    //         },
    //         {
    //             question: "How do you handle authentication and authorization in a MERN application?",
    //             intention: "Determine understanding of JWT, OAuth, session management and secure best practices.",
    //             answer: "Use JWTs signed with a secret key stored securely (e.g., environment variables). Upon login, generate a token with user ID and role claims, set expiration. Store the token in HttpOnly cookies or localStorage with proper CSP headers. For protected routes, create Express middleware that verifies the token, extracts the payload, and attaches user info to req.user. Use role-based checks (e.g., admin) by inspecting the role claim. Implement token refresh logic, revoke tokens via blacklist or short expiration. For sensitive data, use HTTPS, set SameSite=Lax/Strict, and enforce CORS policies."
    //         },
    //         {
    //             question: "Explain how you would design and implement a RESTful API endpoint for creating a new...",
    //             intention: "",
    //             answer: ""
    //         }
    //     ],
    //     behavioralQuestions: [
    //         {
    //             question: "Can you explain how you would structure a MERN stack application to ensure maintainability and scalability?",
    //             intention: "Assess candidate's architectural thinking and knowledge of separation of concerns across layers.",
    //             answer: "Start with a clear folder structure separating client and server. Use a React frontend with functional components and hooks, a Node/Express server exposing RESTful APIs, and MongoDB for persistence. Apply the MVC or Clean Architecture pattern: models for data, controllers for business logic, and routes for API endpoints. Leverage environment variables for configuration, use a central config module, and implement middleware for authentication and logging. Adopt a component-based UI with reusable components, context or Redux for state, and prop drilling avoidance. For scalability, implement pagination, indexing in MongoDB, and consider horizontal scaling of Node processes using PM2 or Docker Swarm. Also discuss unit, integration, and end-to-end testing coverage and CI/CD pipelines for continuous deployment."
    //         },
    //         {
    //             question: "How do you handle authentication and authorization in a MERN application?",
    //             intention: "Determine understanding of JWT, OAuth, session management and secure best practices.",
    //             answer: "Use JWTs signed with a secret key stored securely (e.g., environment variables). Upon login, generate a token with user ID and role claims, set expiration. Store the token in HttpOnly cookies or localStorage with proper CSP headers. For protected routes, create Express middleware that verifies the token, extracts the payload, and attaches user info to req.user. Use role-based checks (e.g., admin) by inspecting the role claim. Implement token refresh logic, revoke tokens via blacklist or short expiration. For sensitive data, use HTTPS, set SameSite=Lax/Strict, and enforce CORS policies."
    //         },
    //         {
    //             question: "Explain how you would design and implement a RESTful API endpoint for creating a new...",
    //             intention: "",
    //             answer: ""
    //         }
    //     ],
    //     preparationPlans: [
    //         {
    //             day: 1,
    //             focus: "Core MERN fundamentals",
    //             tasks: [
    //                 "Review React hooks & context, Node/Express routing, Mongoose schemas",
    //                 "Watch \"MERN Stack Full Course\" by Traversy Media",
    //                 "Take a quick code quiz on CRUD operations"
    //             ]
    //         },
    //         {
    //             day: 2,
    //             focus: "RESTful API design & authentication",
    //             tasks: [
    //                 "Read \"Designing Web APIs\" by Brenda Jin",
    //                 "Implement a small Express API with JWT and role-based auth",
    //                 "Use Postman to test endpoints"
    //             ]
    //         },
    //         {
    //             day: 3,
    //             focus: "Performance & optimization",
    //             tasks: [
    //                 "Study React performance patterns",
    //                 "Implement virtualized list in sample app",
    //                 "Benchmark with React DevTools"
    //             ]
    //         },
    //         {
    //             day: 4,
    //             focus: "Security best practices",
    //             tasks: [
    //                 "Read OWASP Top 10 for web apps",
    //                 "Configure Helmet & express-rate-limit in demo app",
    //                 "Set up HTTPS locally with self-signed cert"
    //             ]
    //         },
    //         {
    //             day: 5,
    //             focus: "DevOps & CI/CD",
    //             tasks: [
    //                 "Create GitHub Actions workflow for lint, test, build",
    //                 "Build Docker image, push to GitHub Container Registry",
    //                 "Deploy to Render free tier"
    //             ]
    //         },
    //         {
    //             day: 6,
    //             focus: "Behavioral & interview prep",
    //             tasks: [
    //                 "Practice STAR stories for teamwork, bug fixing, prioritization",
    //                 "Mock interview with a friend or using Pramp",
    //                 "Record and review answers"
    //             ]
    //         },
    //         {
    //             day: 7,
    //             focus: "Mock coding challenge",
    //             tasks: [
    //                 "Solve 2-3 MERN related problems on LeetCode or HackerRank",
    //                 "Time yourself, write clean code, explain approach",
    //                 "Review solutions and optimize"
    //             ]
    //         }
    //     ],
    //     skillGaps: [
    //         {
    //             skill: "Node.js/Express deep API design",
    //             severity: "high"
    //         },
    //         {
    //             skill: "TypeScript usage in MERN",
    //             severity: "medium"
    //         },
    //         {
    //             skill: "Docker & container orchestration",
    //             severity: "medium"
    //         },
    //         {
    //             skill: "CI/CD pipeline implementation",
    //             severity: "medium"
    //         },
    //         {
    //             skill: "Advanced database modeling in MongoDB",
    //             severity: "low"
    //         }
    //     ],
    //     title: "MERN Stack Developer",
    // };

    const getSeverityClass = (severity) => {
        switch (severity) {
            case "high":
                return "bg-destructive/15 text-destructive border-destructive/30";
            case "medium":
                return "bg-amber-500/15 text-amber-500 border-amber-500/30";
            default:
                return "bg-green-500/15 text-green-500 border-green-500/30";
        }
    };

    if (isLoadingDetail) {
        return (
            <InterviewReportSkeleton />
        );
    }

    if (isErrorDetail) {
        return (
            <ErrorState
                text={errorDetail?.response?.data?.message}
                onRetry={() => window.location.reload()}
            />
        );
    }

    if (!interviewReportResponse) {
        return (
            <ErrorState text="Interview report not found" />
        );
    }


    return (
        <InterviewReportLayout
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            interviewReportResponse={interviewReportResponse}
            getSeverityClass={getSeverityClass}
        />
    );
};

export default InterviewReport;