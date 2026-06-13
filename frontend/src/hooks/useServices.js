import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "../api/userService";

//interview report keys
const reportKeys = {
    all: ['interviewReports'],
    lists: () => [...reportKeys.all, 'list'],
    detail: (id) => [...reportKeys.all, 'detail', id],
};

export const useServices = (interviewId = null) => {
    const queryClient = useQueryClient();

    // GET ALL INTERVIEW REPORTS QUERY
    const getAllInterviewReportsQuery = useQuery({
        queryKey: reportKeys.lists(),
        queryFn: userService.getAllInterviewReports,
    });

    // GET INTERVIEW REPORT BY ID QUERY
    const getInterviewReportByIdQuery = useQuery({
        queryKey: reportKeys.detail(interviewId),
        queryFn: () => userService.getInterviewReportById(interviewId),
        enabled: !!interviewId, // Prevents running automatically if interviewId is undefined/null
    });

    // GENERATE INTERVIEW REPORT MUTATION
    const generateInterviewReportMutation = useMutation({
        mutationFn: userService.interviewReport,
        onSuccess: (newlyGeneratedReport) => {
            // Update the newly generated report
            if (newlyGeneratedReport?.id) {
                queryClient.setQueryData(
                    reportKeys.detail(newlyGeneratedReport.id),
                    newlyGeneratedReport
                );
            }

            // Update the list of all reports
            queryClient.invalidateQueries({ queryKey: reportKeys.lists() });
        },
    });

    return {
        // get all interview report queries
        interviewReports: getAllInterviewReportsQuery.data,
        isLoadingList: getAllInterviewReportsQuery.isLoading,
        isErrorList: getAllInterviewReportsQuery.isError,
        errorList: getAllInterviewReportsQuery.error,

        // get interview report by id queries
        currentInterviewReport: getInterviewReportByIdQuery.data,
        isLoadingDetail: getInterviewReportByIdQuery.isLoading,
        isErrorDetail: getInterviewReportByIdQuery.isError,
        errorDetail: getInterviewReportByIdQuery.error,


        // generate interview report mutation
        generateInterviewReport: generateInterviewReportMutation.mutateAsync,
        isInterviewReportGenerating: generateInterviewReportMutation.isPending,
        interviewReportGenerationError: generateInterviewReportMutation.error,
    }
}
