import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

const InterviewReportGenerationError = ({
    error,
    onRetry,
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-md">
            <div className="w-full max-w-md rounded-3xl border bg-card/90 p-8 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                        <AlertTriangle className="h-8 w-8 text-destructive" />
                    </div>

                    <h2 className="text-xl font-semibold">
                        Something Went Wrong
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        {error ||
                            "Unable to generate your interview report. Please try again."}
                    </p>

                    <Button
                        onClick={onRetry}
                        className="mt-6"
                    >
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        Try Again
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InterviewReportGenerationError;