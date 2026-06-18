import { Skeleton } from "@/components/ui/skeleton";

const PreviousInterviewReportsSkeleton = () => {
    return (
        <div className="container mx-auto max-w-7xl py-8">

            {/* Header Skeleton */}
            <div className="mb-8 space-y-3">
                <Skeleton className="h-9 w-80" />
                <Skeleton className="h-5 w-[420px]" />
            </div>

            {/* Report Cards Skeleton */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">

                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border bg-card p-5 shadow-sm"
                    >
                        <div className="space-y-4">

                            {/* Job Title */}
                            <Skeleton className="h-6 w-3/4" />

                            {/* Match Score */}
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                            </div>

                            {/* Skill Tags */}
                            <div className="flex flex-wrap gap-2">
                                <Skeleton className="h-7 w-20 rounded-full" />
                                <Skeleton className="h-7 w-24 rounded-full" />
                                <Skeleton className="h-7 w-16 rounded-full" />
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-2">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-9 w-24 rounded-lg" />
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default PreviousInterviewReportsSkeleton;