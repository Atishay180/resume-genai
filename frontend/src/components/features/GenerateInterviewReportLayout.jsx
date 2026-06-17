import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, User, UploadCloud, Sparkles, Info } from "lucide-react";
import InterviewReportGenerating from "../common/InterviewReportGenerating";
import InterviewReportGenerationError from "../common/InterviewReportGenerationError";

const GenerateInterviewReportLayout = ({
    profile,
    handleChange,
    handleResumeUpload,
    handleGenerateInterviewStrategy,
    isInterviewReportGenerating,
    interviewReportGenerationError,
}) => {

    const placeholderTexts = {
        jobDescription: `Paste the full job description here...

Example:

Senior Frontend Engineer

Requirements:
• 3+ years React experience
• Strong JavaScript/TypeScript knowledge
• Experience with REST APIs
• Understanding of scalable architectures
• Excellent communication skills`,

        selfDescription: `Briefly describe your experience, key skills and years of experience if you don't have a resume handy...`,
    }

    // Show loading overlay when generating report
    if (isInterviewReportGenerating) {
        return <InterviewReportGenerating />;
    }

    // Show error overlay if report generation fails
    if (interviewReportGenerationError) {
        return (
            <InterviewReportGenerationError
                error={interviewReportGenerationError.message}
                onRetry={handleGenerateInterviewStrategy}
            />
        )
    }

    return (
        <div className="mx-auto max-w-6xl">

            {/* Header */}
            <div className="mb-5 text-center">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Create Your Custom{" "}
                    <span className="bg-linear-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                        Interview Plan
                    </span>
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Let our AI analyze the job requirements and your profile
                    to build a personalized interview strategy.
                </p>
            </div>

            {/* Main Card */}
            <Card className="overflow-hidden rounded-3xl border bg-card shadow-sm" >
                <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">

                        {/* Left Section */}
                        <div className="border-r border-border p-4">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-primary" />
                                    <h2 className="font-semibold text-foreground">
                                        Target Job Description
                                    </h2>
                                </div>

                                <Badge
                                    variant="secondary"
                                    className="bg-primary/10 text-primary"
                                >
                                    Required
                                </Badge>
                            </div>

                            <Textarea
                                maxLength={5000}
                                className="h-[360px] resize-none border-border bg-background"
                                placeholder={placeholderTexts.jobDescription}
                                value={profile.jobDescription}
                                onChange={(e) =>
                                    handleChange("jobDescription", e.target.value)
                                }
                            />

                            <div className="mt-2 text-right text-xs text-muted-foreground">
                                {profile.jobDescription.length} / 5000 chars
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="p-4">
                            <div className="mb-4 flex items-center gap-2">
                                <User className="h-4 w-4 text-primary" />
                                <h2 className="font-semibold text-foreground">
                                    Your Profile
                                </h2>
                            </div>

                            {/* Upload Resume */}
                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <h3 className="text-sm font-medium">
                                        Upload Resume
                                    </h3>

                                    <Badge
                                        variant="secondary"
                                        className="bg-primary/10 text-primary"
                                    >
                                        Best Results
                                    </Badge>
                                </div>

                                <label
                                    htmlFor="resume-upload"
                                    className="flex min-h-[130px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/20 p-4 transition-all hover:border-primary hover:bg-muted/40"
                                >
                                    <UploadCloud className="mb-2 h-7 w-7 text-primary" />

                                    <p className="text-sm font-medium text-foreground">
                                        {profile.resume
                                            ? profile.resume.name
                                            : "Click to upload or drag & drop"}
                                    </p>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        PDF (Max 3MB)
                                    </p>
                                </label>

                                <input
                                    id="resume-upload"
                                    type="file"
                                    accept="application/pdf"
                                    className="hidden"
                                    onChange={handleResumeUpload}
                                />
                            </div>

                            {/* Divider */}
                            <div className="my-5 flex items-center gap-4">
                                <Separator className="flex-1" />

                                <span className="text-xs font-medium text-muted-foreground">
                                    OR
                                </span>

                                <Separator className="flex-1" />
                            </div>

                            {/* Self Description */}
                            <div>
                                <h3 className="mb-2 text-sm font-medium">
                                    Quick Self Description
                                </h3>

                                <Textarea
                                    className="h-[120px] resize-none border-border bg-background"
                                    placeholder={placeholderTexts.selfDescription}
                                    value={profile.selfDescription}
                                    onChange={(e) =>
                                        handleChange("selfDescription", e.target.value)
                                    }
                                />
                            </div>

                            {/* Info Box */}
                            <div className="mt-4 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">
                                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                                <p className="text-xs text-muted-foreground">
                                    Either a Resume or a Self Description is
                                    required to generate a personalized
                                    interview strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex flex-col gap-3 border-t border-border p-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                        AI-Powered Strategy Generation • Approx. 30 seconds
                    </p>

                    <Button
                        size="default"
                        onClick={handleGenerateInterviewStrategy}
                        className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground shadow-sm"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate My Interview Strategy
                    </Button>
                </CardFooter>
            </Card >
        </div >
    );
};

export default GenerateInterviewReportLayout;