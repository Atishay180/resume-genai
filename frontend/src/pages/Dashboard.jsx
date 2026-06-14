import { toast } from "sonner";
import GenerateInterviewReport from "../components/features/GenerateInterviewReport";
import { useServices } from "../hooks/useServices";
import { useState } from "react";

const Dashboard = () => {

    const { generateInterviewReport, isInterviewReportGenerating, interviewReportGenerationError } = useServices();


    const [profile, setProfile] = useState({
        resume: null,
        jobDescription: "",
        selfDescription: "",
    });

    const handleChange = (field, value) => {
        setProfile((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const allowedTypes = [
            "application/pdf",
        ];

        if (!allowedTypes.includes(file.type)) {
            toast.error("Please upload a PDF file", {
                position: "top-center",
            });
            e.target.value = "";
            return;
        }

        if (file.size > 3 * 1024 * 1024) {
            toast.error("File size should be less than 3MB", {
                position: "top-center",
            });
            e.target.value = "";
            return;
        }

        setProfile((prev) => ({
            ...prev,
            resume: file,
        }));
    };

    const handleGenerateInterviewStrategy = async () => {
        try {
            if (!profile.jobDescription.trim()) {
                toast.error("Job Description is required", {
                    position: "top-center",
                });
                return;
            }

            if (
                !profile.resume &&
                !profile.selfDescription.trim()
            ) {
                toast.error(
                    "Please upload a resume or provide a self description",
                    {
                        position: "top-center",
                    }
                );
                return;
            }

            const formData = new FormData();

            formData.append("jobDescription", profile.jobDescription.trim());
            formData.append("selfDescription", profile.selfDescription.trim());

            if (profile.resume) {
                formData.append("resume", profile.resume);
            }

            const response = await generateInterviewReport(formData);
            console.log(response);

            toast.success("Interview strategy generated successfully!", {
                position: "top-center",
            });

            setProfile({
                resume: null,
                jobDescription: "",
                selfDescription: "",
            });
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to generate interview strategy", { position: "top-center", });
        }
    };

    return (
        <div className="container mx-auto border">
            <div className="min-h-screen bg-background px-4 py-4">
                <GenerateInterviewReport
                    profile={profile}
                    handleChange={handleChange}
                    handleResumeUpload={handleResumeUpload}
                    handleGenerateInterviewStrategy={handleGenerateInterviewStrategy}
                    isInterviewReportGenerating={isInterviewReportGenerating}
                    interviewReportGenerationError={interviewReportGenerationError}
                />
            </div>
        </div>
    );
};

export default Dashboard;