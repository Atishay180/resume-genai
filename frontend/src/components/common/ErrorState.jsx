import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorState = ({
    text = "Something went wrong. Please try again later.",
    onRetry,
}) => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl border bg-card/80 p-8 text-center shadow-lg backdrop-blur-sm">
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>

                {/* Title */}
                <h2 className="mb-2 text-xl font-semibold">
                    Oops! Something went wrong
                </h2>

                {/* Error Message */}
                <p className="mb-6 text-sm text-muted-foreground">
                    {text}
                </p>

                {/* Retry Button */}
                {onRetry && (
                    <Button
                        onClick={onRetry}
                        className="gap-2"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Try Again
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ErrorState;