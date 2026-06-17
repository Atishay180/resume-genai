import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const InterviewReportSkeleton = () => {
    return (
        <div className="mx-auto overflow-hidden rounded-xl bg-card lg:grid lg:h-[87vh] lg:grid-cols-12">

            {/* LEFT SIDEBAR */}
            <div className="border-b p-4 lg:col-span-2 lg:border-b-0 lg:border-r">
                <Skeleton className="mb-6 h-4 w-20" />

                <div className="flex gap-2 lg:block lg:space-y-2">
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                </div>
            </div>

            {/* MIDDLE CONTENT */}
            <div className="p-4 md:p-6 lg:col-span-7 lg:h-full">

                <Skeleton className="mb-6 h-8 w-64" />

                <div className="space-y-5">

                    {[1, 2, 3].map((item) => (
                        <Card key={item}>
                            <CardContent className="space-y-4 p-5">

                                <Skeleton className="h-5 w-4/5" />

                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-40" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>

                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-40" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-4/5" />
                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="border-t p-4 md:p-6 lg:col-span-3 lg:border-l lg:border-t-0">

                {/* Match Score */}
                <div className="mb-8 text-center">

                    <div className="mx-auto flex h-28 w-28 items-center justify-center md:h-36 md:w-36">
                        <Skeleton className="h-full w-full rounded-full" />
                    </div>

                    <Skeleton className="mx-auto mt-4 h-4 w-24" />
                </div>

                {/* Skill Gaps */}
                <div>
                    <Skeleton className="mb-4 h-4 w-24" />

                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Skeleton
                                key={item}
                                className="h-12 w-full rounded-lg"
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InterviewReportSkeleton;