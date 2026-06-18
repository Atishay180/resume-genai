import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, CalendarDays, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const PreviousInterviewReportLayout = ({ report }) => {
    const navigate = useNavigate();

    const getScoreColor = (score) => {
        if (score >= 80) return "text-green-500";
        if (score >= 60) return "text-amber-500";
        return "text-red-500";
    };

    return (
        <Card className="transition-all hover:shadow-md">
            <CardContent className="p-5">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Left */}
                    <div className="space-y-3">

                        <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />

                            <h3 className="text-lg font-semibold">
                                {report.title}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">

                            <Badge variant="secondary">
                                {report.technicalQuestions?.length || 0} Technical
                            </Badge>

                            <Badge variant="secondary">
                                {report.behavioralQuestions?.length || 0} Behavioral
                            </Badge>

                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarDays className="h-4 w-4" />
                            {new Date(report.createdAt).toLocaleDateString()}
                        </div>

                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-start gap-3 md:items-end">

                        <div className="text-center">

                            <div
                                className={`text-3xl font-bold ${getScoreColor(
                                    report.matchScore
                                )}`}
                            >
                                {report.matchScore}%
                            </div>

                            <p className="text-xs text-muted-foreground">
                                Match Score
                            </p>

                        </div>

                        <Button
                            onClick={() =>
                                navigate(`/interview-reports/${report._id}`)
                            }
                        >
                            View Report
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                    </div>

                </div>

            </CardContent>
        </Card>
    );
};

export default PreviousInterviewReportLayout;