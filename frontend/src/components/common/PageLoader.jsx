import { Loader2 } from "lucide-react";

const PageLoader = ({
    text = "Loading..."
}) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />

            <p className="text-sm text-muted-foreground">
                {text}
            </p>
        </div>
    );
};

export default PageLoader;