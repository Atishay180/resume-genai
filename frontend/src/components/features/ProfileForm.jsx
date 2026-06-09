import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
    Briefcase,
    User,
    UploadCloud,
    Sparkles,
    Info,
} from "lucide-react";

const ProfileForm = () => {

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

    const [resume, setResume] = useState(null);

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Please upload a PDF, DOC, or DOCX file");
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert("File size should be less than 10MB");
            return;
        }

        setResume(file);
    };

    return (
        <div >
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
                            />

                            <div className="mt-2 text-right text-xs text-muted-foreground">
                                0 / 5000 chars
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
                                        {resume
                                            ? resume.name
                                            : "Click to upload or drag & drop"}
                                    </p>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        PDF • DOC • DOCX (Max 10MB)
                                    </p>
                                </label>

                                <input
                                    id="resume-upload"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
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
                        className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-sm"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate My Interview Strategy
                    </Button>
                </CardFooter>
            </Card >

            {/* Footer Links */}
            {/* < div className="mt-4 flex justify-center gap-6 text-xs text-muted-foreground" >
                <button className="transition-colors hover:text-foreground">
                    Privacy Policy
                </button>

                <button className="transition-colors hover:text-foreground">
                    Terms of Service
                </button>

                <button className="transition-colors hover:text-foreground">
                    Help Center
                </button>
            </div > */}
        </div >
    );
};

export default ProfileForm;