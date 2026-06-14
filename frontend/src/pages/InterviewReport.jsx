import { useState } from "react";
import { Card, CardContent, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, MessageSquare, Map, } from "lucide-react";

const InterviewReport = () => {
    const [activeSection, setActiveSection] = useState("technical");

    const response = {
        _id: "6a2e3640e8cb6a8da61383c5",
        matchScore: 45,
        technicalQuestions: [
            {
                question: "Can you explain how you would structure a MERN stack application to ensure maintainability and scalability?",
                intention: "Assess candidate's architectural thinking and knowledge of separation of concerns across layers.",
                answer: "Start with a clear folder structure separating client and server. Use a React frontend with functional components and hooks, a Node/Express server exposing RESTful APIs, and MongoDB for persistence. Apply the MVC or Clean Architecture pattern: models for data, controllers for business logic, and routes for API endpoints. Leverage environment variables for configuration, use a central config module, and implement middleware for authentication and logging. Adopt a component-based UI with reusable components, context or Redux for state, and prop drilling avoidance. For scalability, implement pagination, indexing in MongoDB, and consider horizontal scaling of Node processes using PM2 or Docker Swarm. Also discuss unit, integration, and end-to-end testing coverage and CI/CD pipelines for continuous deployment."
            },
            {
                question: "How do you handle authentication and authorization in a MERN application?",
                intention: "Determine understanding of JWT, OAuth, session management and secure best practices.",
                answer: "Use JWTs signed with a secret key stored securely (e.g., environment variables). Upon login, generate a token with user ID and role claims, set expiration. Store the token in HttpOnly cookies or localStorage with proper CSP headers. For protected routes, create Express middleware that verifies the token, extracts the payload, and attaches user info to req.user. Use role-based checks (e.g., admin) by inspecting the role claim. Implement token refresh logic, revoke tokens via blacklist or short expiration. For sensitive data, use HTTPS, set SameSite=Lax/Strict, and enforce CORS policies."
            },
            {
                question: "Explain how you would design and implement a RESTful API endpoint for creating a new...",
                intention: "",
                answer: ""
            }
        ],
        behavioralQuestions: [
            {
                question: "Can you explain how you would structure a MERN stack application to ensure maintainability and scalability?",
                intention: "Assess candidate's architectural thinking and knowledge of separation of concerns across layers.",
                answer: "Start with a clear folder structure separating client and server. Use a React frontend with functional components and hooks, a Node/Express server exposing RESTful APIs, and MongoDB for persistence. Apply the MVC or Clean Architecture pattern: models for data, controllers for business logic, and routes for API endpoints. Leverage environment variables for configuration, use a central config module, and implement middleware for authentication and logging. Adopt a component-based UI with reusable components, context or Redux for state, and prop drilling avoidance. For scalability, implement pagination, indexing in MongoDB, and consider horizontal scaling of Node processes using PM2 or Docker Swarm. Also discuss unit, integration, and end-to-end testing coverage and CI/CD pipelines for continuous deployment."
            },
            {
                question: "How do you handle authentication and authorization in a MERN application?",
                intention: "Determine understanding of JWT, OAuth, session management and secure best practices.",
                answer: "Use JWTs signed with a secret key stored securely (e.g., environment variables). Upon login, generate a token with user ID and role claims, set expiration. Store the token in HttpOnly cookies or localStorage with proper CSP headers. For protected routes, create Express middleware that verifies the token, extracts the payload, and attaches user info to req.user. Use role-based checks (e.g., admin) by inspecting the role claim. Implement token refresh logic, revoke tokens via blacklist or short expiration. For sensitive data, use HTTPS, set SameSite=Lax/Strict, and enforce CORS policies."
            },
            {
                question: "Explain how you would design and implement a RESTful API endpoint for creating a new...",
                intention: "",
                answer: ""
            }
        ],
        preparationPlans: [
            {
                day: 1,
                focus: "Core MERN fundamentals",
                tasks: [
                    "Review React hooks & context, Node/Express routing, Mongoose schemas",
                    "Watch \"MERN Stack Full Course\" by Traversy Media",
                    "Take a quick code quiz on CRUD operations"
                ]
            },
            {
                day: 2,
                focus: "RESTful API design & authentication",
                tasks: [
                    "Read \"Designing Web APIs\" by Brenda Jin",
                    "Implement a small Express API with JWT and role-based auth",
                    "Use Postman to test endpoints"
                ]
            },
            {
                day: 3,
                focus: "Performance & optimization",
                tasks: [
                    "Study React performance patterns",
                    "Implement virtualized list in sample app",
                    "Benchmark with React DevTools"
                ]
            },
            {
                day: 4,
                focus: "Security best practices",
                tasks: [
                    "Read OWASP Top 10 for web apps",
                    "Configure Helmet & express-rate-limit in demo app",
                    "Set up HTTPS locally with self-signed cert"
                ]
            },
            {
                day: 5,
                focus: "DevOps & CI/CD",
                tasks: [
                    "Create GitHub Actions workflow for lint, test, build",
                    "Build Docker image, push to GitHub Container Registry",
                    "Deploy to Render free tier"
                ]
            },
            {
                day: 6,
                focus: "Behavioral & interview prep",
                tasks: [
                    "Practice STAR stories for teamwork, bug fixing, prioritization",
                    "Mock interview with a friend or using Pramp",
                    "Record and review answers"
                ]
            },
            {
                day: 7,
                focus: "Mock coding challenge",
                tasks: [
                    "Solve 2-3 MERN related problems on LeetCode or HackerRank",
                    "Time yourself, write clean code, explain approach",
                    "Review solutions and optimize"
                ]
            }
        ],
        skillGaps: [
            {
                skill: "Node.js/Express deep API design",
                severity: "high"
            },
            {
                skill: "TypeScript usage in MERN",
                severity: "medium"
            },
            {
                skill: "Docker & container orchestration",
                severity: "medium"
            },
            {
                skill: "CI/CD pipeline implementation",
                severity: "medium"
            },
            {
                skill: "Advanced database modeling in MongoDB",
                severity: "low"
            }
        ],
        title: "MERN Stack Developer",
    };

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

    return (
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border bg-card lg:grid lg:h-[90vh] lg:grid-cols-12">

            {/* LEFT SIDEBAR */}
            <div className="border-b p-4 lg:col-span-2 lg:border-b-0 lg:border-r">
                <h3 className="mb-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Sections
                </h3>

                <div className="flex gap-2 overflow-x-auto lg:block lg:space-y-2">

                    <button
                        onClick={() => setActiveSection("technical")}
                        className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm transition lg:w-full
            ${activeSection === "technical"
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                    >
                        <Code2 className="h-4 w-4" />
                        Technical Questions
                    </button>

                    <button
                        onClick={() => setActiveSection("behavioral")}
                        className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm transition lg:w-full
            ${activeSection === "behavioral"
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                    >
                        <MessageSquare className="h-4 w-4" />
                        Behavioral Questions
                    </button>

                    <button
                        onClick={() => setActiveSection("roadmap")}
                        className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm transition lg:w-full
            ${activeSection === "roadmap"
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                    >
                        <Map className="h-4 w-4" />
                        Preparation Roadmap
                    </button>

                </div>
            </div>

            {/* MIDDLE CONTENT */}
            <div className="p-4 md:p-6 lg:col-span-7 lg:h-full lg:overflow-y-auto">

                {activeSection === "technical" && (
                    <div className="space-y-5">
                        <h2 className="text-2xl font-bold">
                            Technical Questions
                        </h2>

                        {response.technicalQuestions.map((question, index) => (
                            <Card key={index}>
                                <CardContent className="space-y-4 p-4 md:p-5">

                                    <div>
                                        <h3 className="font-semibold">
                                            Q{index + 1}. {question.question}
                                        </h3>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-primary">
                                            Interviewer's Intention
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {question.intention}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-primary">
                                            Recommended Answer
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {question.answer}
                                        </p>
                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {activeSection === "behavioral" && (
                    <div className="space-y-5">
                        <h2 className="text-2xl font-bold">
                            Behavioral Questions
                        </h2>

                        {response.behavioralQuestions.map((question, index) => (
                            <Card key={index}>
                                <CardContent className="space-y-4 p-5">

                                    <h3 className="font-semibold">
                                        Q{index + 1}. {question.question}
                                    </h3>

                                    <div>
                                        <p className="text-sm font-medium text-primary">
                                            Interviewer's Intention
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {question.intention}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-primary">
                                            Recommended Answer
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {question.answer}
                                        </p>
                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {activeSection === "roadmap" && (
                    <div className="space-y-6">

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                            <h2 className="text-2xl font-bold">
                                Preparation Roadmap
                            </h2>

                            <Badge>
                                {response.preparationPlans.length} Day Plan
                            </Badge>
                        </div>

                        <div className="space-y-6">
                            {response.preparationPlans.map((plan) => (
                                <div
                                    key={plan.day}
                                    className="relative border-l-2 border-primary pl-6"
                                >
                                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                                    <Badge className="mb-3">
                                        Day {plan.day}
                                    </Badge>

                                    <h3 className="mb-2 text-lg font-semibold">
                                        {plan.focus}
                                    </h3>

                                    <ul className="space-y-2">
                                        {plan.tasks.map((task, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-muted-foreground"
                                            >
                                                • {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="border-t p-4 md:p-6 lg:col-span-3 lg:border-l lg:border-t-0">

                <div className="mb-8 text-center">

                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-green-500 md:h-36 md:w-36 md:border-[8px]">
                        <div>
                            <div className="text-4xl font-bold">
                                {response.matchScore}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                %
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 font-medium text-green-500">
                        Match Score
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Skill Gaps
                    </h3>

                    <div className="space-y-3">
                        {response.skillGaps.map((gap, index) => (
                            <div
                                key={index}
                                className={`rounded-lg border p-3 text-sm font-medium ${getSeverityClass(
                                    gap.severity
                                )}`}
                            >
                                {gap.skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InterviewReport;