import React from 'react';
import { useServices } from '../hooks/useServices';
import PreviousInterviewReportLayout from '../components/features/PreviousInterviewReportLayout';
import PreviousInterviewReportsSkeleton from '../components/skeletons/PreviousInterviewReportsSkeleton';

const PreviousInterviewReports = () => {

    const { interviewReports, isLoadingList, isErrorList, errorList } = useServices();

    if (isLoadingList) {
        return <PreviousInterviewReportsSkeleton />;
    }

    if (isErrorList) {
        return (
            <div className="container mx-auto max-w-7xl py-8">
                {errorList?.response?.data?.message || "Failed to load reports"}
            </div>
        );
    }

    if (!interviewReports.interviewReports?.length) {
        return (
            <div className="container mx-auto max-w-7xl py-8">
                <h1 className="text-3xl font-bold">
                    Previous Interview Reports
                </h1>

                <p className="mt-4 text-muted-foreground">
                    No interview reports found.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-7xl py-8">

            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Previous Interview Reports
                </h1>

                <p className="text-muted-foreground">
                    View and revisit all your generated interview reports.
                </p>
            </div>

            <div className=" grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                {interviewReports.interviewReports?.map((report) => (
                    <PreviousInterviewReportLayout
                        key={report._id}
                        report={report}
                    />
                ))}
            </div>

        </div>
    )
}

export default PreviousInterviewReports;
