import { Loader2, Sparkles } from "lucide-react";

const InterviewReportGenerating = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-md">
            <div className="w-full max-w-md rounded-3xl border bg-card/90 p-8 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>

                    <h2 className="text-xl font-semibold">
                        Generating Interview Strategy
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Our AI is analyzing your profile and the job description
                        to create a personalized interview preparation plan.
                    </p>

                    <div className="mt-6 flex items-center gap-2 rounded-full border border-primary/20 bg-linear-to-r from-primary/15 via-primary/5 to-primary/15 px-4 py-2 backdrop-blur-sm animate-pulse">
                        <Sparkles className="h-4 w-4 text-primary animate-spin" />

                        <span className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-sm font-semibold text-transparent">
                            This may take 20-30 seconds
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewReportGenerating;