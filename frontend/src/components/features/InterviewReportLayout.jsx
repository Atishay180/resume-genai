import React from 'react'
import { Card, CardContent, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, MessageSquare, Map, } from "lucide-react";

const InterviewReportLayout = ({ activeSection, setActiveSection, interviewReportResponse, getSeverityClass }) => {
    return (
        <div className="mx-auto overflow-hidden rounded-xl bg-card lg:grid lg:h-[87vh] lg:grid-cols-12">

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
            <div className="p-4 md:p-6 lg:col-span-7 lg:h-full lg:overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-muted scrollbar-track-transparent">

                {activeSection === "technical" && (
                    <div className="space-y-5">
                        <h2 className="text-2xl font-bold">
                            Technical Questions
                        </h2>

                        {interviewReportResponse?.technicalQuestions.map((question, index) => (
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

                        {interviewReportResponse?.behavioralQuestions.map((question, index) => (
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
                                {interviewReportResponse?.preparationPlans.length} Day Plan
                            </Badge>
                        </div>

                        <div className="space-y-6">
                            {interviewReportResponse?.preparationPlans.map((plan) => (
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
                                {interviewReportResponse?.matchScore}
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
                        {interviewReportResponse?.skillGaps.map((gap, index) => (
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
    )
}

export default InterviewReportLayout
